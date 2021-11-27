import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';
import { SelectorProps } from '../Selector/Selector.styled';

export interface SearchBoxProps extends SelectorProps {
  isOnSearchbox?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconSize?: string | number;
  absolutePosition?: boolean;
  bordered?: boolean;
  offset?: number;
  offsetY?: number;
  h?: number;
  p?: number;
  fontWeight?: string;
  fontSize?: number;
}
export const SearchboxStyled = styled.input`
  width: 100%;
  height: ${(props: SearchBoxProps) => (props.h ? `${props.h}px` : '60px')};
  padding: ${(props: SearchBoxProps) =>
    props.p ? `${props.p}px` : 'padding-block: 22px;padding-left: 72px;'};

  // * Taking in mind the icon
  border-radius: 16px;
  background-color: ${({ theme }: { theme: ThemeProperties }) => theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;

  &:focus-within {
    color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
    outline: none;
  }
`;
