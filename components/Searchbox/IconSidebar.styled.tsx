import styled from 'styled-components';
import { SearchBoxProps } from './Searchbox.styled';
import { ThemeProperties } from '../../styles/theme.config';

export const IconStyled = styled.div<SearchBoxProps>`
  inset-block: ${(props) => (props.iconLeft || props.iconRight ? '22px' : '0')};
  border-radius: 10px;

  ${(props) => !props.isOnSearchbox && `padding: 10px;`}
  ${(props) => props.absolutePosition && 'position: absolute;'};
  ${(props) => props.iconRight && 'inset-inline: 26px;'};
  ${(props) => props.iconLeft && 'inset-inline-end: 26px;'};
  ${(props) => props.isOnSearchbox && `color: ${props.theme.accentText};`}
  ${(props) => props.iconSize && `width: ${props.iconSize}px;`}
  ${(props) => props.iconSize && `height: ${props.iconSize}px;`}

  ${(props) =>
    props.currentRoute &&
    props.routeName &&
    props.routeName === props.currentRoute &&
    `
      border: 1px solid ${props.theme.primaryClrRed};
      color: ${props.theme.primaryClrRed};
    `}
  
  transition: color 0.2s ease-in-out;

  &:hover {
    ${(props) => props.isOnSearchbox && `color: ${props.theme.accentText};`}
  }
`;
