import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { getTaskByStatus } from '../../../graphql/queries/getTaskByStatus';
import { Query } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { TaskCard } from '../TaskCard';

type CustomComp = (props: { sectionTitle: string }) => JSX.Element;

export const TaskWrapper: NextPage<{ sectionTitle: string }> = ({
  sectionTitle,
}) => {
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
    <div style={{ minWidth: '25%' }}>
      <h3 style={{ textTransform: 'capitalize' }}>{sectionTitle}</h3>
      <Flex direction="column" alignItems="flex-start">
        {tasks?.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Flex>
    </div>
  );
};
