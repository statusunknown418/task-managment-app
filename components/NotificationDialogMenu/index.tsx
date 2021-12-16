import * as Dialog from '@radix-ui/react-dialog';
import { BellIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import styled from 'styled-components';
import { ThemeProperties } from '../../styles/theme.config';
import { ContentStyled } from './Content.styled';
import { TriggerStyled } from './Trigger.styled';

const PStyled = styled.p`
  color: ${({ theme }: { theme: ThemeProperties }) => theme.accentText};
  font-style: italic;
`;

export interface DialogMenuProps {}

export const DialogMenu: NextPage<DialogMenuProps> = () => {
  return (
    <Dialog.Root>
      <TriggerStyled>
        <BellIcon width={'20px'} height={'20px'} />
      </TriggerStyled>
      <ContentStyled>
        <h2>Notifications</h2>

        <PStyled>Stay calm, you don&apos;t have any notifications yet!</PStyled>
      </ContentStyled>
    </Dialog.Root>
  );
};
