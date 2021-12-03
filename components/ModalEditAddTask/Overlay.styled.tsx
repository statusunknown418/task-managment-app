import { DialogOverlay } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const OverlayStyled = styled(DialogOverlay)`
  backdrop-filter: brightness(0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
