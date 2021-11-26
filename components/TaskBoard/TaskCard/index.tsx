import { NextPage } from 'next';
import { Task } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';

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
      style={{ minWidth: '100%' }}
    >
      <p>{name}</p>
    </Flex>
  );
};
