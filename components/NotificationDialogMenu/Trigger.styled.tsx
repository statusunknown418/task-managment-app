import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface TriggerProps extends DialogTriggerProps {
  bgColor?: string;
  triggerSize?: number;
  p?: number;
  triggerColor?: string;
  rounded?: number;
  hoverBgColor?: string;
  hoverTriggerColor?: string;
}
export const TriggerStyled = styled(DialogTrigger)<TriggerProps>`
  width: ${({ triggerSize }) => triggerSize}px;
  height: ${({ triggerSize }) => triggerSize}px;
  padding: ${({ p }) => p}px;
  border-radius: ${({ rounded }) => rounded}px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${(props) => (props.triggerColor ? props.triggerColor : props.theme.accentText)};

  &:hover {
    color: ${(props) => props.hoverTriggerColor && props.hoverTriggerColor};
    background-color: ${({ hoverBgColor: hoverColor }) => hoverColor && hoverColor};
  }

  transition: all 0.2s ease-in-out;
`;
