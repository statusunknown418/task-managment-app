import { NextPage } from 'next';
import { useFixedToast } from '../../utils/hooks/useFixedToast';
import { useGetAllTaskStatusQuery } from '../../__generated__/graphql-remastered';
import { ContainerStyled, Spinner, TaskWrapper } from '../exports';

export const TaskBoard: NextPage = () => {
  const {
    data: taskColumnData,
    loading,
    error,
  } = useGetAllTaskStatusQuery({
    variables: {
      input: {},
    },
  });

  const sectionNamesSet = new Set<string>(
    taskColumnData?.tasks.map((task) => task.status)
  );

  useFixedToast(
    error ? 'error' : 'success',
    error !== undefined ? error.message : 'Tasks loaded'
  );

  return (
    <>
      <ContainerStyled style={{ height: '78.5vh' }} pb={16}>
        {loading && (
          <div style={{ position: 'absolute', top: '25%', left: '50%' }}>
            <Spinner height={100} width={100} />
          </div>
        )}
        {Array.from(sectionNamesSet).map((sectionName, id) => {
          return (
            <div key={id} style={{ minWidth: '350px' }}>
              <TaskWrapper sectionTitle={sectionName} />
            </div>
          );
        })}
      </ContainerStyled>
    </>
  );
};
