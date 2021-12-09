import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface ExtendedDialogTriggerProps extends DialogTriggerProps {
  backgroundColor?: string;
  padding?: number;
  triggerColor?: string;
  rounded?: number;
}

export const ModalTriggerStyled = styled(DialogTrigger)<ExtendedDialogTriggerProps>`
  padding: ${({ padding: p }) => p}px;
  border-radius: ${({ rounded }) => rounded}px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  color: ${(props) => (props.triggerColor ? props.triggerColor : props.theme.mainText)};
`;
