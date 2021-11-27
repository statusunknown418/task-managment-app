import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchBox } from '../Searchbox';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
import { Task } from '../../__generated__/graphql-schema-generated';
import Image from 'next/image';

export interface ExtendedDialogTriggerProps extends DialogTriggerProps {
  bgColor?: string;
  p?: number;
  triggerColor?: string;
  rounded?: number;
}

export const ModalTriggerStyled = styled(DialogTrigger)<ExtendedDialogTriggerProps>`
  padding: ${({ p }) => p}px;
  border-radius: ${({ rounded }) => rounded}px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${(props) => (props.triggerColor ? props.triggerColor : props.theme.accentText)};
`;

export const OverlayStyled = styled(Dialog.Overlay)`
  backdrop-filter: brightness(0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export interface ExtendedModalContentProps extends Dialog.DialogContentProps {
  p?: number;
  rounded?: number;
}

export const ModalContentStyled = styled(Dialog.Content)<ExtendedModalContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90vw;
  transform: translate(-50%, -50%);
  max-width: 450px;
  max-height: 85vh;
  padding: ${({ p }) => p}px;
  background-color: ${(props) => props.theme.accentBg};
  border-radius: ${({ rounded }) => rounded}px;
  &:focus {
    outline: none;
  }
`;

export interface ModalCloseProps extends Dialog.DialogCloseProps {
  isCreate?: boolean;
  p?: number;
  textColor?: string;
  fontWeight?: string;
}
export const ModalCloseStyled = styled(Dialog.Close)<ModalCloseProps>`
  padding: ${({ p }) => p}px;
  background-color: ${(props) =>
    props.isCreate ? props.theme.primaryClrRed : 'transparent'};
  color: ${(props) => (props.textColor ? props.textColor : props.theme.mainText)};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => (props.isCreate ? '8' : '0')}px;
`;

export interface CustomModalProps extends Partial<Task> {
  onClose?: () => void;
  onSubmit?: (task: Task) => void;
}

export const ItemSubmenuStyled = styled(Flex)``;

export const ModalAddEditTask: NextPage<CustomModalProps> = ({ children, onSubmit }) => {
  return (
    <Dialog.Root>
      <OverlayStyled />
      <ModalTriggerStyled>{children}</ModalTriggerStyled>

      <ModalContentStyled p={25} rounded={10}>
        <Dialog.Title>
          <SearchboxStyled
            type={'text'}
            p={2}
            fontWeight="700"
            placeholder="Task title"
            fontSize={17}
            height={20}
          />
        </Dialog.Title>

        <Flex gap={16} alignItems="center" justifyContent="space-between">
          <div>
            <Flex>
              <Image src={'/icons/PlusMinusIcon.svg'} alt="" width={15} height={15} />
            </Flex>
          </div>
        </Flex>

        <Dialog.Description>
          <Flex gap={24} alignItems="center">
            <ModalCloseStyled p={8}>Cancel</ModalCloseStyled>
            <ModalCloseStyled p={8} isCreate>
              Create
            </ModalCloseStyled>
          </Flex>
        </Dialog.Description>
      </ModalContentStyled>
    </Dialog.Root>
  );
};
