import { DialogClose, DialogCloseProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface ModalCloseProps extends DialogCloseProps {
  isCreate?: boolean;
  p?: number;
  textColor?: string;
  fontWeight?: string;
}
export const ModalCloseStyled = styled(DialogClose)<ModalCloseProps>`
  padding: ${({ p }) => p}px;
  background-color: ${(props) =>
    props.isCreate ? props.theme.primaryClrRed : 'transparent'};
  color: ${(props) => (props.textColor ? props.textColor : props.theme.mainText)};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => (props.isCreate ? '8' : '0')}px;
`;
