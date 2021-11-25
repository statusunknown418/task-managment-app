import { NextPage } from 'next';
import { TaskCardStyled } from './TaskCard.styled';

interface Props {
  name: string;
}

export const TaskCard: NextPage<Props> = ({ name }) => {
  return (
    <TaskCardStyled>
      <>{name}</>
    </TaskCardStyled>
  );
};
