import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { getTaskByStatus } from '../../../graphql/queries/getTaskByStatus';
import { Query } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { Spinner } from '../../Spinner';
import { TaskCard } from '../TaskCard';

export const TaskWrapper: NextPage<{ sectionTitle: string }> = ({ sectionTitle }) => {
  const {
    data: tasks,
    loading,
    error,
  } = useQuery<Query>(getTaskByStatus, {
    variables: {
      input: {
        status: sectionTitle,
      },
    },
  });

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      gap={16}
      style={{ minWidth: '100%' }}
    >
      <h3 style={{ textTransform: 'capitalize' }}>
        {sectionTitle.replace(/[^a-zA-Z+$]/, ' ')} (0{tasks?.tasks.length})
      </h3>
      <Flex
        direction="column"
        alignItems="flex-start"
        gap={16}
        style={{ minWidth: '100%' }}
      >
        {loading && <Spinner />}
        {tasks?.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Flex>
    </Flex>
  );
};
