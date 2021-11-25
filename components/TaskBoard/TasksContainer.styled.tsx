import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const ContainerStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-auto-flow: column;
  gap: 32px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 100%;
    height: 10px;
    background-color: ${({ theme }: { theme: ThemeProperties }) => theme.darkBg} /
      10;
    border-radius: 10px;
    border: 1px solid
      ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: ThemeProperties }) =>
      theme.accentText};
    border-radius: 10px;
  }
`;
