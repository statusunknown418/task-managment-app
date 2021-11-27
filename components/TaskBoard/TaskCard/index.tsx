import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Task } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { ModalAddEditTask } from '../../ModalEditAddTask';
import { TaskEditPopover } from '../../TaskEditPopover';

interface Props {
  task: Partial<Task>;
}

export interface DueDateProps {
  dueDate: string;
  p?: number;
  rounded?: number;
}

export const DueDateCard = styled.div<DueDateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: ${(props) =>
    new Date(props.dueDate).getTime() < new Date().getTime() ? '#3d3335' : ' #36393d'};
  color: ${(props) =>
    new Date(props.dueDate).getTime() < new Date().getTime() ? '#d0564a' : '#ffffff'};
  padding: ${(props) => props.p}px;
  border-radius: ${(props) => props.rounded}px;
`;

enum pointsEnum {
  ZERO = '1',
  ONE = '2',
  TWO = '3',
  THREE = '4',
  FOUR = '5',
  FIVE = '6',
  SIX = '7',
  SEVEN = '8',
  EIGHT = '9',
}

export const TaskCard: NextPage<Props> = ({
  task: { id, dueDate, name, tags, pointEstimate },
}) => {
  const flatDate = new Date(dueDate).toDateString().split(' ').splice(1, 3).join(' ');
  return (
    <Flex
      isCard
      alignItems="flex-start"
      direction="column"
      grow={1}
      basis="1"
      style={{ padding: '16px', borderRadius: '8px', minWidth: '100%' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <strong>{name}</strong>
        <ModalAddEditTask>
          <DotsHorizontalIcon />
        </ModalAddEditTask>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={10}>
        <p>{pointsEnum[pointEstimate !== undefined ? pointEstimate : 'ZERO']}</p>

        <DueDateCard dueDate={dueDate} p={5} rounded={4}>
          <p style={{ textTransform: 'uppercase' }}>
            {new Date(dueDate).getDate() === new Date().getDate()
              ? 'today'
              : new Date(dueDate).getTime() ===
                new Date(new Date().getTime() - 1).getTime()
              ? 'yesterday'
              : flatDate}
          </p>
        </DueDateCard>
      </Flex>
    </Flex>
  );
};
