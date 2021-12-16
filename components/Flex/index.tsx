import styled from 'styled-components';

interface FlexProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'space-around';
  gap?: number;
  marginX?: number;
  marginY?: number;
  marginTop?: number;
  marginBottom?: number;
  direction?: 'row' | 'column';
  isCard?: boolean;
  grow?: number;
  basis?: string;
  padding?: number;
  accentBgColor?: boolean;
  borderRadius?: number;
  wrap?: string;
}

export const Flex = styled.div<FlexProps>`
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  ${(props) => (props.basis ? `flex: ${props.basis}` : 'display: flex')};
  ${(props) =>
    props.accentBgColor && `background-color: ${props.theme.accentBg}`};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap}px;
  margin-block: ${(props) => props.marginY}px;
  margin-inline: ${(props) => props.marginX}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  ${(props) => props.isCard && `background-color: ${props.theme.accentBg};`}
  ${(props) => props.grow && `flex-grow: ${props.grow};`};
  padding: ${(props) => props.padding}px;
  border-radius: ${(props) => props.borderRadius}px;
  ${(props) => props.wrap && `flex-wrap: wrap;`};
`;
