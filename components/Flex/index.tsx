import { NextPage } from 'next';
import styled from 'styled-components';

interface FlexProps {
  alignItems?: 'center' | 'stretch' | 'baseline';
  justifyContent?: 'center' | 'stretch' | 'space-between' | 'space-around';
  gap?: number;
  marginX?: number;
  marginY?: number;
  mt?: number;
  mb?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap}px;
  margin-block: ${(props) => props.marginY}px;
  margin-inline: ${(props) => props.marginX}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
`;
