import { NextPage } from 'next';
import { Flex } from '../Flex';
import { ContainerStyled } from './TasksContainer.styled';

interface Props {
  title: string;
}

export const TaskBoard: NextPage<Props> = ({ title }) => {
  return (
    <ContainerStyled>
      <Flex>
        <h2>{title}</h2>
      </Flex>
    </ContainerStyled>
  );
};
