import { NextPage } from 'next';
import { Flex } from '../../Flex';

interface Props {
  name: string;
}

export const TaskCard: NextPage<Props> = ({ name }) => {
  return (
    <Flex
      alignItems="flex-start"
      direction="column"
      style={{ minWidth: '100%' }}
    >
      <p>{name}</p>
    </Flex>
  );
};
