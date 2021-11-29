import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface ExtendedDialogTriggerProps extends DialogTriggerProps {
  bgColor?: string;
  p?: number;
  triggerColor?: string;
  rounded?: number;
}

export const ModalTriggerStyled = styled(DialogTrigger)<ExtendedDialogTriggerProps>`
  padding: ${({ p }) => p}px;
  border-radius: ${({ rounded }) => rounded}px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${(props) => (props.triggerColor ? props.triggerColor : props.theme.accentText)};
`;
