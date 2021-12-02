import { NextPage } from 'next';
import * as Dialog from '@radix-ui/react-dialog';
import { BellIcon } from '@radix-ui/react-icons';
import { ThemeProperties } from '../../styles/theme.config';
import styled from 'styled-components';
import { ContentStyled, TriggerStyled } from '../exports';

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
