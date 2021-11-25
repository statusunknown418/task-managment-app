import { SearchIcon } from '@heroicons/react/outline';
import styled from 'styled-components';
import { SearchBoxProps } from '.';
import { ThemeProperties } from '../../styles/theme.config';

export const IconStyled = styled.i<SearchBoxProps>`
  width: 20px;
  position: absolute;
  inset-block: 22px;

  ${(props) => props.iconRight && 'inset-inline: 26px;'};
  ${(props) => props.iconLeft && 'inset-inline-end: 26px;'};

  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
  }
`;
