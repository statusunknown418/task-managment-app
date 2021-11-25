import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const LayoutStyled = styled.main`
  margin-right: ${({ theme }: { theme: ThemeProperties }) =>
    theme.sidebarMargin};

  // * This hack prevents the sidebar from overlapping the content
  margin-left: calc(
    2 * ${({ theme }: { theme: ThemeProperties }) => theme.sidebarMargin} + ${({ theme }: { theme: ThemeProperties }) => theme.sidebarWidth});

  margin-block: ${({ theme }: { theme: ThemeProperties }) => theme.sidebarMargin};
`;
