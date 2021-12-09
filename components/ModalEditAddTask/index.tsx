import { NextPage } from 'next';
import {
  GetAllTasksByStatusDocument,
  PointEstimate,
  Scalars,
  Status,
  TaskTag,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  Task,
} from '../../__generated__/graphql-remastered';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog';
import { ASSIGNEES } from '../../utils/SEED';
import { useState } from 'react';
import { Flex } from '../Flex';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { TagContainerStyled } from '../TaskBoard/Tags/TagContainer.styled';
import { TagsDropdownStyled } from '../TaskBoard/Tags/TagDropdown.styled';
import { TagLabelStyled } from '../TaskBoard/Tags/TagLabel.styled';
import { TagTitleStyled } from '../TaskBoard/Tags/TagTitle.styled';
import { DatePickerStyled } from './Datepicker.styled';
import { ModalCloseStyled } from './ModalClose.styled';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';
import { OptionStyled } from './Option.styled';
import { OverlayStyled } from './Overlay.styled';
import { SelectStyled } from './Select.styled';

export interface CustomModalProps {
  task: Partial<Task>;
  type?: 'create' | 'edit';
}

interface MutationData {
  taskName: Scalars['String'];
  pointEstimate: PointEstimate;
  position: Scalars['Float'];
  status: Status;
  tags: Array<TaskTag>;
  dueDate: Date;
}

export const ModalAddEditTask: NextPage<CustomModalProps> = ({
  children,
  type,
  task,
}) => {
  const [updateTask] = useUpdateTaskMutation();
  const [createTask] = useCreateTaskMutation();
  const { register, setValue, handleSubmit } = useForm<MutationData>();

  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState<TaskTag[]>([]);

  const onSubmitHandler = taskSubmit();

  return (
    <Dialog.Root>
      <OverlayStyled />
      <ModalTriggerStyled
        style={
          type === 'create'
            ? {
                backgroundColor: '#DA584B',
                borderRadius: '8px',
                paddingInline: '5px',
              }
            : {}
        }
        padding={4}
      >
        {children}
      </ModalTriggerStyled>

      <ModalContentStyled padding={35} rounded={10}>
        <Dialog.Title>
          <SearchboxStyled
            autoFocus={false}
            type={'text'}
            padding={2}
            fontWeight="700"
            placeholder={task.name || 'New task name'}
            fontSize={17}
            height={20}
            {...register('taskName', { value: task.name })}
          />
        </Dialog.Title>

        <Flex gap={16} alignItems="center" justifyContent="space-between">
          <SelectStyled {...register('pointEstimate')}>
            <OptionStyled>Estimate</OptionStyled>
            {Object.values(PointEstimate).map((point) => (
              <OptionStyled key={point}>{point}</OptionStyled>
            ))}
          </SelectStyled>

          <SelectStyled name="assignee">
            <OptionStyled value="assignee">Assignee</OptionStyled>
            {ASSIGNEES.map(({ id, name }) => (
              <OptionStyled key={id}>{name}</OptionStyled>
            ))}
          </SelectStyled>

          <div>
            <div>
              <Flex onClick={() => setExpanded((prev) => !prev)}>
                <TagContainerStyled>
                  {selections.length
                    ? selections.map((name, i) => (
                        <span key={i}>
                          {i ? ' - ' : null} {name.split('_').join(' ')}
                        </span>
                      ))
                    : 'Tags'}
                  {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </TagContainerStyled>
              </Flex>
              {expanded && (
                <TagsDropdownStyled>
                  <TagTitleStyled>Tag title</TagTitleStyled>
                  {Object.values(TaskTag).map((tag) => (
                    <TagLabelStyled htmlFor="one" key={tag}>
                      <input
                        type="checkbox"
                        name={tag}
                        onChange={(event) => {
                          // small but not so simple hack to get toggle value on checkbox and assign it to our submitHandler
                          if (event.target.checked) {
                            return setSelections([...selections, tag]);
                          }
                          const filtered = selections.filter(
                            (name) => name !== event.target.name,
                          );
                          return setSelections(filtered);
                        }}
                      />
                      {tag}
                    </TagLabelStyled>
                  ))}
                </TagsDropdownStyled>
              )}
            </div>
          </div>

          <DatePickerStyled type="date" {...register('dueDate')} />
        </Flex>

        <Flex gap={24} marginTop={16} alignItems="center">
          <ModalCloseStyled padding={8} onClick={() => setSelections([])}>
            Cancel
          </ModalCloseStyled>
          <ModalCloseStyled
            padding={8}
            variant="primary"
            onClick={() => {
              setValue('tags', selections);
              onSubmitHandler();
            }}
            type="submit"
          >
            {type}
          </ModalCloseStyled>
        </Flex>
      </ModalContentStyled>
    </Dialog.Root>
  );

  function taskSubmit() {
    return handleSubmit(async (data) => {
      const { taskName: name, pointEstimate, dueDate, status, tags } = data;
      try {
        if (type === 'edit') {
          await updateTask({
            variables: {
              updateTaskInput: {
                id: task.id,
                name,
                dueDate: dueDate === null ? task.dueDate : dueDate,
                pointEstimate,
                tags,
                status,
              },
            },
          });

          toast.success('Task edited!', {
            style: {
              borderRadius: '20px',
              background: '#333',
              color: 'white',
            },
          });
        } else if (type === 'create') {
          await createTask({
            variables: {
              createTaskInput: {
                dueDate,
                name,
                pointEstimate,
                status: Status.Backlog,
                tags,
              },
            },
            refetchQueries: [GetAllTasksByStatusDocument],
          });

          toast.success('Task created successfully');
          window.location.reload();
        }
      } catch (error) {
        toast.error('Something went wrong, please provide all fields');
      } finally {
        setSelections([]);
      }
    });
  }
};
