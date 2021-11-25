import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const NotificationStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  cursor: pointer;

  &:last-child {
    font-size: 0.8rem;
    color: red;
  }
`;
