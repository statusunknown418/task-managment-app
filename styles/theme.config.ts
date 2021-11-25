import { createGlobalStyle } from 'styled-components';

export const CustomGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 15px;
    border: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }

  body {
    background-color:${({ theme }: { theme: typeof customTheme }) =>
      theme.darkBg};
    color: ${({ theme }: { theme: typeof customTheme }) => theme.mainText};
  } 
`;

export type ThemeProperties = typeof customTheme;

export const customTheme = {
  // Colors
  mainText: '#ffffff',
  accentText: '#94979A',
  darkBg: '#222528',
  accentBg: '#2C2F33',
  primaryClrRed: '#DA584B',
  secondaryClrGreen: '#70B252',
  tertiaryClrYellow: '#E5B454',

  // Typography
  primaryFontSize: '15px',

  // Sizing
  sidebarWidth: '232px',
  sidebarMargin: '32px',
};
