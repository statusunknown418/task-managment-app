import { NextPage } from 'next';
import styled from 'styled-components';
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
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Flex,
  ModalCloseStyled,
  ModalContentStyled,
  ModalTriggerStyled,
  OptionStyled,
  SearchboxStyled,
  SelectStyled,
} from '../exports';

export const DatePickerStyled = styled.input`
  background-color: #42464a;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0.5rem;
`;

export const OverlayStyled = styled(Dialog.Overlay)`
  backdrop-filter: brightness(0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

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
  // TODO - refactor this
  const [updateTask, { data, error }] = useUpdateTaskMutation();
  const [createTask, { data: createData, error: createError }] = useCreateTaskMutation();
  const { register, setValue, handleSubmit } = useForm<MutationData>();

  const onSubmitHandler = taskSubmit();

  return (
    <Dialog.Root>
      <OverlayStyled />
      <ModalTriggerStyled p={4}>{children}</ModalTriggerStyled>

      <ModalContentStyled p={25} rounded={10}>
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

        <Flex
          gap={16}
          alignItems="center"
          justifyContent="space-between"
          style={{ position: 'relative' }}
        >
          <SelectStyled name="estimate" id="estimate" defaultValue={'estimate'}>
            <OptionStyled value="estimate">Estimate</OptionStyled>
            {Object.values(PointEstimate).map((point) => (
              <OptionStyled key={point} {...register('pointEstimate', { value: point })}>
                {point}
              </OptionStyled>
            ))}
          </SelectStyled>

          <SelectStyled name="estimate" id="estimate" defaultValue={'estimate'}>
            <OptionStyled value="asignee">Asignee</OptionStyled>
            {Object.values(PointEstimate).map((point) => (
              <OptionStyled key={point} {...register('pointEstimate', { value: point })}>
                {point}
              </OptionStyled>
            ))}
          </SelectStyled>

          <div>
            <DatePickerStyled
              type="date"
              {...register('dueDate', {
                required: true,
                value: new Date(),
              })}
              placeholder={task.dueDate}
            />
          </div>
        </Flex>

        <Flex gap={24} alignItems="center">
          <ModalCloseStyled p={8}>Cancel</ModalCloseStyled>
          <ModalCloseStyled
            p={8}
            variant="primary"
            onClick={() => onSubmitHandler()}
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
                dueDate,
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
                tags: [TaskTag.Rails, TaskTag.React],
              },
            },
            refetchQueries: [GetAllTasksByStatusDocument],
          });

          toast.success('Task created successfully');
          // not permanent solution
          window.location.reload();
        }
      } catch (error) {
        toast.error('Something went wrong');
      }

      console.log({ data, error, createData, createError });
    });
  }
};
