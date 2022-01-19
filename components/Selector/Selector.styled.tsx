import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export interface SelectorProps {
  currentRoute?: string;
  isFirst?: boolean;
  routeName?: string;
}

export const SelectorStyled = styled.div<SelectorProps>`
  ${(props) => props.isFirst && `margin-top: 44px;`}

  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  cursor: default;
  ${(props) =>
    props.currentRoute === props.routeName &&
    `color: ${props.theme.primaryClrRed};`}

  background: ${(props) =>
    props.currentRoute === props.routeName &&
    'linear-gradient(to right, rgba(0,0,0,0), rgba(210,77,77,0.1));'};
  transition: color 0.1s ease-in;
  display: flex;
  align-items: center;
  gap: 19px;
  padding-block: 16px;
  padding-left: 19px;
  font-weight: 700;
  position: relative;

  &:hover {
    color: ${(props) =>
      props.routeName !== props.currentRoute && props.theme.mainText};
  }

  &::after {
    content: '';
    right: 0;
    top: 0;
    margin-left: auto;
    position: absolute;
    width: 4px;
    ${(props) => props.currentRoute === props.routeName && `height: 100%;`}
    background-color: ${({ theme }: { theme: ThemeProperties }) =>
      theme.primaryClrRed};
  }
`;
