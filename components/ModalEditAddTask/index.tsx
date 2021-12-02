import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
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
import { ModalCloseStyled } from './ModalClose.styled';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

export const PointSelect = styled.select`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  background-color: #42464a;
  padding: 0.4rem;
  border-radius: 8px;
  color: #ffffff;
`;

export const DatePickerStyled = styled.input`
  background-color: ${(props) => props.theme.accentBg};
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.accentText};
  border-radius: 8px;
  padding: 0.5rem;
`;

export const Points = styled.option`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  background-color: #42464a;
  padding: 0.4rem;
  border-radius: 8px;
  color: #ffffff;
`;

export const TimeInfo = styled.div`
  display: flex;
  max-height: 32px;
  width: 100%;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
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
          <TimeInfo>{task.pointEstimate ? task.pointEstimate : 'Set'} points</TimeInfo>

          <div>
            <DatePickerStyled
              type="date"
              {...register('dueDate', { required: true, value: task.dueDate })}
              placeholder={task.dueDate}
            />
          </div>
        </Flex>
        <label htmlFor="estimate">Estimate</label>
        <PointSelect name="estimate" id="estimate">
          {Object.values(PointEstimate).map((point) => (
            <Points key={point} {...register('pointEstimate', { value: point })}>
              {point}
            </Points>
          ))}
        </PointSelect>

        <Dropdown.Root modal>
          <Dropdown.Trigger>
            <Points>{task.pointEstimate} Estimate</Points>
          </Dropdown.Trigger>
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
