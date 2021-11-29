import styled from 'styled-components';

export interface TagProps {
  tag: string;
}

export const TagStyled = styled.div<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border-radius: 5px;

  ${(props) =>
    props.tag === 'REACT' &&
    `background-color: ${props.theme.quaternaryBgBlue};
    color: ${props.theme.quaternaryClrBlue};`}

  ${(props) =>
    props.tag === 'ANDROID' &&
    `background-color: ${props.theme.secondaryBgGreen};
    color: ${props.theme.secondaryClrGreen};`}

  ${(props) =>
    props.tag === 'IOS' &&
    `background-color: ${props.theme.tertiaryBgYellow};
    color: ${props.theme.tertiaryClrYellow};`}


  ${(props) =>
    props.tag === 'RAILS' &&
    `background-color: ${props.theme.primaryBgRed};
    color: ${props.theme.primaryClrRed};`}
`;
