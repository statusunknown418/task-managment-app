import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const PStyled = styled.p`
  text-transform: uppercase;
`;

export interface SelectorProps {
  color?: string;
  isSelected?: boolean;
  isFirst?: boolean;
}

export const SelectorStyled = styled.div<SelectorProps>`
  ${(props) => props.isFirst && `margin-top: 44px;`}
  ${(props) => props.isSelected && `color: ${props.theme.primaryClrRed};`}
  background: ${(props) =>
    props.isSelected &&
    'linear-gradient(to right, rgba(0,0,0,0), rgba(210,77,77,0.1));'};

  display: flex;
  align-items: center;
  gap: 19px;
  padding-block: 16px;
  padding-left: 19px;

  &::after {
    content: '';
    right: 0;
    top: 0;
    margin-left: auto;
    ${(props) => props.isSelected && 'width: 4px;'}
    ${(props) => props.isSelected && 'height: 250%;'}
    background-color: ${({ theme }: { theme: ThemeProperties }) =>
      theme.primaryClrRed};
  }
`;
