import { NextPage } from 'next';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';

export const Spinner: NextPage<SpinnerProps> = ({ height, width }) => (
  <StyledSpinner viewBox="0 0 50 50" width={width} height={height}>
    <circle className="path" cx="25" cy="25" r="10" fill="none" strokeWidth="2" />
  </StyledSpinner>
);

interface SpinnerProps {
  width?: number;
  height?: number;
}

const StyledSpinner = styled.svg<SpinnerProps>`
  animation: rotate 2s linear infinite;
  place-self: center;
  width: ${(props) => (props.width ? props.width : '50px')};
  height: ${(props) => (props.height ? props.height : '50px')};

  & .path {
    stroke: ${({ theme }: { theme: ThemeProperties }) => theme.primaryClrRed};
    stroke-linecap: butt;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
