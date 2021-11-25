import styled from 'styled-components';

export interface HeaderProps {
  name: string;
}

export const BoardHeaderStyled = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
`;
