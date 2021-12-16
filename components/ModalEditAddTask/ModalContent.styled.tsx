import { DialogContent, DialogContentProps } from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

export interface ExtendedModalContentProps extends DialogContentProps {
  padding?: number;
  rounded?: number;
}

const animateOnShow = keyframes`
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalContentStyled = styled(
  DialogContent,
)<ExtendedModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
  padding: ${({ padding: p }) => p}px;
  background-color: ${(props) => props.theme.accentBg};
  border-radius: ${({ rounded }) => rounded}px;

  animation: ${animateOnShow} 0.3s ease-in;
`;
