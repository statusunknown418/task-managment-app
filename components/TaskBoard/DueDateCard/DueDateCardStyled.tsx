import styled from 'styled-components';

export interface DueDateProps {
  dueDate: string;
  p?: number;
  rounded?: number;
  gap?: number;
}

export const DueDateCardStyled = styled.div<DueDateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  background-color: ${(props) =>
    new Date(props.dueDate).getTime() < new Date().getTime() ? '#3d3335' : ' #36393d'};
  & * {
    color: ${(props) =>
      new Date(props.dueDate).getTime() < new Date().getTime() ? '#d0564a' : '#ffffff'};
  }
  padding: ${(props) => props.p}px;
  border-radius: ${(props) => props.rounded}px;
  gap: ${(props) => props.gap}px;
`;
