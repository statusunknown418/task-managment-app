import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { getAllTaskStatus } from '../../../graphql/queries/getAllTaskStatus';
import { Query } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { TaskCard } from '../TaskCard';

interface Props {
  sectionTitle: string;
}

export const TaskWrapper: NextPage<Props> = ({ sectionTitle }) => {
  const {
    data: tasks,
    loading,
    error,
  } = useQuery<Query>(getAllTaskStatus, {
    variables: {
      input: {},
    },
  });
  return (
    <div style={{ minWidth: '25%' }}>
      <h3>{sectionTitle}</h3>
      <Flex direction="column" alignItems="flex-start"></Flex>
    </div>
  );
};
