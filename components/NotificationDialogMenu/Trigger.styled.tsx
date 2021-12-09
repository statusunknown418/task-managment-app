import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface TriggerProps extends DialogTriggerProps {
  bgColor?: string;
  triggerSize?: number;
  padding?: number;
  triggerColor?: string;
  borderRadius?: number;
  hoverBgColor?: string;
  hoverTriggerColor?: string;
}
export const TriggerStyled = styled(DialogTrigger)<TriggerProps>`
  width: ${({ triggerSize }) => triggerSize}px;
  height: ${({ triggerSize }) => triggerSize}px;
  padding: ${({ padding: p }) => p}px;
  border-radius: ${({ borderRadius: rounded }) => rounded}px;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) =>
    props.triggerColor ? props.triggerColor : props.theme.accentText};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.hoverTriggerColor && props.hoverTriggerColor};
    background-color: ${({ hoverBgColor: hoverColor }) =>
      hoverColor && hoverColor};
  }
`;
