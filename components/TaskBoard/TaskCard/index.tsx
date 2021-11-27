import { ClockIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import styled from 'styled-components';
import { Task } from '../../../__generated__/graphql-schema-generated';
import { CustomIcon } from '../../CustomIcon';
import { Flex } from '../../Flex';
import { ModalAddEditTask } from '../../ModalEditAddTask';
import { TaskEditPopover } from '../../TaskEditPopover';
import { DueDateCard } from '../DueDateCard';

interface Props {
  task: Partial<Task>;
}

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
        <p style={{ fontWeight: 'bolder' }}>{name}</p>
        <ModalAddEditTask>
          <DotsHorizontalIcon />
        </ModalAddEditTask>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mt={10}>
        <p style={{ fontWeight: 500 }}>
          {pointsEnum[pointEstimate !== undefined ? pointEstimate : 'ZERO']} pts
        </p>

        <DueDateCard dueDate={dueDate} />
      </Flex>

      <Flex alignItems="center" mt={10} gap={10}>
        {tags?.map((tag, id) => (
          <p key={id}>{tag.split('_').join(' ')}</p>
        ))}
      </Flex>
    </Flex>
  );
};
