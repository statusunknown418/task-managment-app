import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
import { GetAllTasksByStatusDocument, Task } from '../../__generated__/graphql-improved';
import { ModalCloseStyled } from './ModalClose.styled';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';
import {
  PointEstimate,
  Scalars,
  Status,
  TaskTag,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from '../../__generated__/graphql-improved';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

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
  const [show, setShow] = useState(false);
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
          <Dropdown.Root>
            <Dropdown.Trigger>{children}</Dropdown.Trigger>
            <Dropdown.Content>
              {Object.values(PointEstimate).map((point) => (
                <Dropdown.Item
                  key={point}
                  onClick={() => {
                    setValue('pointEstimate', point);
                  }}
                >
                  {point}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown.Root>
          <div>
            <span>Due Date</span>
            <input type="date" {...register('dueDate', { required: true })} />
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
