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
  ::-webkit-scrollbar {
    margin-block: .5rem;
    padding-block: .5rem;
    width: 7px;
    height: 7px;
    background-color: ${({ theme }: { theme: ThemeProperties }) =>
      theme.darkBg} /
      10;
    border-radius: 100vw;
    border: 1px solid
      ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: ThemeProperties }) =>
      theme.accentText};
    border-radius: 100vw;
  }
`;

export type ThemeProperties = typeof customTheme;

export const customTheme = {
  // Colors
  mainText: '#ffffff',
  accentText: '#94979A',
  darkBg: '#222528',
  accentBg: '#2C2F33',
  primaryBgRed: '#3d3335',
  secondaryBgGreen: '#333c36',
  tertiaryBgYellow: '#3e3c36',
  quaternaryBgBlue: '#38424d',
  extraBgPurple: '#5b3e72',

  primaryClrRed: '#DA584B',
  secondaryClrGreen: '#70B252',
  tertiaryClrYellow: '#E5B454',
  quaternaryClrBlue: '#548ADB',
  extraClrPurple: '#CF5DF8',

  // Typography
  primaryFontSize: '15px',

  // Sizing
  sidebarWidth: '232px',
  sidebarMargin: '32px',
};
