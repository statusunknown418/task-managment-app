import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
import { Task } from '../../__generated__/graphql-schema-generated';
import Image from 'next/image';
import { ModalCloseStyled } from './ModalClose.styled';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';
import {
  GetAllTaskStatusDocument,
  PointEstimate,
  Scalars,
  Status,
  TaskTag,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from '../../__generated__/graphql-remastered';
import { useForm } from 'react-hook-form';
import { Spinner } from '../Spinner';
import { useFixedToast } from '../../utils/hooks/useFixedToast';
import toast from 'react-hot-toast';

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
  const [updateTask, { data, error, loading }] = useUpdateTaskMutation();
  const [createTask, { data: createData, error: createError, loading: createLoading }] =
    useCreateTaskMutation();

  const { register, setValue, handleSubmit } = useForm<MutationData>();

  const onSubmitHandler = handleSubmit(async (data) => {
    const { taskName: name, pointEstimate, dueDate, status, tags } = data;
    try {
      if (type === 'edit') {
        await updateTask({
          variables: {
            updateTaskInput: {
              id: task.id,
              name,
              dueDate: new Date(dueDate),
              pointEstimate: pointEstimate.toString() && pointEstimate.toString(),
              tags,
              status,
            },
          },
        });
      } else if (type === 'create') {
        await createTask({
          variables: {
            createTaskInput: {
              dueDate,
              name,
              pointEstimate,
              status,
              tags,
            },
          },
        });
        console.log('create');

        toast.success('Task created successfully');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
    console.log({ data, error, createData, createError });
  });

  console.log({ 'from api': task.dueDate });
  return (
    <Dialog.Root>
      <OverlayStyled />
      <ModalTriggerStyled>{children}</ModalTriggerStyled>

      <ModalContentStyled p={25} rounded={10}>
        <Dialog.Title>
          <SearchboxStyled
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
          <div>
            <Flex direction="column">
              <label htmlFor="points">
                <Image src={'/icons/PlusMinusIcon.svg'} alt="" width={15} height={15} />
                <span>Points</span>
              </label>
              <span {...setValue('pointEstimate', PointEstimate.EIGHT)}>
                Hit me to select max points
              </span>
              <select id="points" {...register('pointEstimate')}>
                {(Object.keys(PointEstimate) as Array<keyof typeof PointEstimate>)
                  .reverse()
                  .map((key, idx) => (
                    <option key={idx} value={key}>
                      {key} points
                    </option>
                  ))}
              </select>
            </Flex>
          </div>
          <div>
            <span>Due Date</span>
            {new Date(task.dueDate).toLocaleDateString()}
            <input
              type="date"
              {...register('dueDate', {
                value: new Date(task.dueDate),
              })}
            />
          </div>
          <div onClick={() => setValue('tags', [TaskTag.React, TaskTag.NodeJs])}>
            <span>React tag</span>
          </div>
          <div
            onClick={() => {
              setValue('status', Status.Todo);
            }}
          >
            <span>todo</span>
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
};
