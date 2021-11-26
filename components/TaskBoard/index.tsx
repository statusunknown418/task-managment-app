import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { getAllTaskStatus } from '../../graphql/queries/getAllTaskStatus';
import { Query } from '../../__generated__/graphql-schema-generated';
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

  console.log({
    taskColumnData,
    loading,
    error,
    sectionNamesSet,
  });
  return (
    <ContainerStyled>
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
      <TaskWrapper sectionTitle="adsasd" />
    </ContainerStyled>
  );
};
