import styled from 'styled-components';

import type { ThemeProperties } from '../../styles/theme.config';

export const SidebarStyled = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  min-width: ${({ theme }: { theme: ThemeProperties }) => theme.sidebarWidth};
  height: calc(100vh - 64px);
  margin: ${({ theme }: { theme: ThemeProperties }) => theme.sidebarMargin};
  display: flex;
  flex-direction: column;
  /* padding-inline: 19px; */
  padding-block: 14px;
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  border-radius: 20px;

  gap: 8px;
`;
