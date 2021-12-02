import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getTaskByStatus } from '../../../graphql/queries/getTaskByStatus';
import { Query, Task } from '../../../__generated__/graphql-remastered';
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

  const [allTasks, setAllTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    tasks && setAllTasks(tasks.tasks);
  }, [tasks]);

  error &&
    toast.error('Where are the tasks? ...', {
      style: {
        backgroundColor: '#300e0c',
        color: '#fff',
        borderRadius: '20px',
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
        {sectionTitle.replace(/[^a-zA-Z+$]/, ' ')} (
        {tasks && tasks.tasks.length > 9
          ? tasks?.tasks.length
          : `0${tasks?.tasks.length}`}
        )
      </h3>
      <Flex
        direction="column"
        alignItems="flex-start"
        gap={16}
        style={{ minWidth: '100%' }}
      >
        {loading && <Spinner />}
        {allTasks && allTasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </Flex>
    </Flex>
  );
};
