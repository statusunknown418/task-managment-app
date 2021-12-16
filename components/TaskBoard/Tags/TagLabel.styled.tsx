import styled from 'styled-components';

export const TagLabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
  &:hover {
    background-color: ${(props) => props.theme.accentBg};
  }
  & > input {
    margin-right: 10px;
    display: block;
  }
`;
