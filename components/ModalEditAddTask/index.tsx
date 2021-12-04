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
import {
  DatePickerStyled,
  Flex,
  ModalCloseStyled,
  ModalContentStyled,
  ModalTriggerStyled,
  OptionStyled,
  OverlayStyled,
  SearchboxStyled,
  SelectStyled,
  TagContainerStyled,
  TagLabelStyled,
  TagsDropdownStyled,
  TagTitleStyled,
} from '../exports';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog';
import { ASSIGNEES } from '../../utils/SEED';
import { useState } from 'react';

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
  const [updateTask, { error }] = useUpdateTaskMutation();
  const [createTask, { data: createData, error: createError }] = useCreateTaskMutation();
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
            ? { backgroundColor: '#DA584B', borderRadius: '8px', paddingInline: '5px' }
            : {}
        }
        p={4}
      >
        {children}
      </ModalTriggerStyled>

      <ModalContentStyled p={35} rounded={10}>
        <Dialog.Title>
          <SearchboxStyled
            autoFocus={false}
            type={'text'}
            p={2}
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
                            (name) => name !== event.target.name
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

        <Flex gap={24} mt={16} alignItems="center">
          <ModalCloseStyled p={8} onClick={() => setSelections([])}>
            Cancel
          </ModalCloseStyled>
          <ModalCloseStyled
            p={8}
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
