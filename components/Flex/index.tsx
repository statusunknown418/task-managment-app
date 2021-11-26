import { NextPage } from 'next';
import styled, { CSSProperties } from 'styled-components';

interface FlexProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'space-around';
  gap?: number;
  marginX?: number;
  marginY?: number;
  mt?: number;
  mb?: number;
  direction?: 'row' | 'column';
}

export const Flex = styled.div<FlexProps>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap}px;
  margin-block: ${(props) => props.marginY}px;
  margin-inline: ${(props) => props.marginX}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
`;
