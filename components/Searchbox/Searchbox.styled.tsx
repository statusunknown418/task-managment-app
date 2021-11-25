import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';
import { SelectorProps } from '../Selector/Selector.styled';

export interface SearchBoxProps extends SelectorProps {
  isOnSearchbox?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconSize: string | number;
  absolutePosition?: boolean;
  bordered?: boolean;
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
