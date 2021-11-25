import { NextPage } from 'next';
import * as Popover from '@radix-ui/react-popover';
import { BellIcon } from '@radix-ui/react-icons';
import { TriggerStyled } from './Trigger.styled';
import { ContentStyled } from './Content.styled';
import { ThemeProperties } from '../../styles/theme.config';
import styled from 'styled-components';

const PStyled = styled.p`
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  font-style: italic;
`;

export interface DialogMenuProps {}

export const DialogMenu: NextPage<DialogMenuProps> = () => {
  return (
    <Popover.Root>
      <TriggerStyled>
        <BellIcon width={'20px'} height={'20px'} />
      </TriggerStyled>
      <ContentStyled>
        <h2>Notifications</h2>

        <PStyled>Stay calm, you don&apos;t have any notifications yet!</PStyled>

        <Popover.Arrow fill="#94979A" offset={5} />
      </ContentStyled>
    </Popover.Root>
  );
};
