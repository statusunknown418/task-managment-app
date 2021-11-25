import { PopoverTrigger } from '@radix-ui/react-popover';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const TriggerStyled = styled(PopoverTrigger)`
  background-color: transparent;
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};

  &:hover {
    color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
  }

  transition: color 0.2s ease-in-out;
`;
