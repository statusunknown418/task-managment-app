import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { getAllTaskStatus } from '../../graphql/queries/getAllTaskStatus';
import { Query } from '../../__generated__/graphql-schema-generated';
import { Spinner } from '../Spinner';
import { ContainerStyled } from './TasksContainer.styled';
import { TaskWrapper } from './TaskWrapper';

export const TaskBoard: NextPage = () => {
  const {
    data: taskColumnData,
    loading,
    error,
  } = useQuery<Query>(getAllTaskStatus, {
    variables: {
      input: {},
    },
  });

  const sectionNamesSet = new Set<string>(
    taskColumnData?.tasks.map((task) => task.status)
  );

  console.log(sectionNamesSet);

  return (
    <ContainerStyled style={{ height: '78.5vh' }} pb={16}>
      {Array.from(sectionNamesSet).map((sectionName, id) => {
        return (
          <div key={id} style={{ minWidth: '350px' }}>
            <TaskWrapper sectionTitle={sectionName} />
          </div>
        );
      })}
    </ContainerStyled>
  );
};
