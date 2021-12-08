import { DialogContent } from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export interface ExtendedContentProps {
  rounded?: number;
}

export const ContentStyled = styled(DialogContent)<ExtendedContentProps>`
  border: 1px solid
    ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
  border-radius: ${(props) => (props.rounded ? props.rounded : '8px')};
`;
