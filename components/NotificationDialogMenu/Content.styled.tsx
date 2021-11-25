import { PopoverContent } from '@radix-ui/react-popover';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const ContentStyled = styled(PopoverContent)`
  border: 1px solid
    ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
