import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { Task } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { ModalAddEditTask } from '../../ModalEditAddTask';
import { TaskEditPopover } from '../../TaskEditPopover';

interface Props {
  task: Partial<Task>;
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
        <p>{name}</p>
        <ModalAddEditTask>
          <DotsHorizontalIcon />
        </ModalAddEditTask>
      </Flex>
    </Flex>
  );
};
