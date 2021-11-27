import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';
import { NextPage } from 'next';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';
import { ExtendedContentProps } from '../NotificationDialogMenu/Content.styled';

// * Since radix-ui has different accessors for the Dropdowns and Popovers, it's needed to restyle them

export const DropdownMenuStyled = styled(
  DropdownMenuContent
)<ExtendedContentProps>`
  border-radius: ${(props) => (props.rounded ? props.rounded : '8px')};
  background-color: ${({ theme }: { theme: ThemeProperties }) =>
    theme.accentBg};
  color: ${({ theme }: { theme: ThemeProperties }) => theme.mainText};
`;

export const DropdownWithProps: NextPage = () => {
  return (
    <Root>
      <DropdownMenuTrigger>Estimate</DropdownMenuTrigger>
      <DropdownMenuStyled rounded={8} style={{ border: '1px solid red' }}>
        <DropdownMenuItem>
          <h1>DropdownMenuItem</h1>
        </DropdownMenuItem>
      </DropdownMenuStyled>
    </Root>
  );
};
