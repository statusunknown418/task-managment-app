import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export interface SearchBoxProps {
  iconLeft?: boolean;
  iconRight?: boolean;
  iconSize: string | number;
}
export const SearchboxStyled = styled.input`
  width: 100%;
  height: 64px;
  padding-block: 22px;

  // * Taking in mind the icon
  padding-left: 72px;
  border-radius: 16px;
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
`;
