import { DialogContent, DialogContentProps } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export interface ExtendedModalContentProps extends DialogContentProps {
  p?: number;
  rounded?: number;
}

export const ModalContentStyled = styled(DialogContent)<ExtendedModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  transform: translate(-50%, -50%);
  max-width: 450px;
  max-height: 85vh;
  padding: ${({ p }) => p}px;
  background-color: ${(props) => props.theme.accentBg};
  border-radius: ${({ rounded }) => rounded}px;
  &:focus {
    outline: none;
  }
`;
