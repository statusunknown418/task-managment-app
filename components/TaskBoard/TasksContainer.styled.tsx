import styled from 'styled-components';

export const ContainerStyled = styled.section<{ pb?: number }>`
  display: flex;
  gap: 32px;
  padding-bottom: ${({ pb }) => pb}px;
  overflow: auto;
  padding-inline-end: 16px;
  padding-block-end: 16px;
`;
