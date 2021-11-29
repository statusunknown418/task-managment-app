import { DialogTrigger, DialogTriggerProps } from '@radix-ui/react-dialog';
import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchBox } from '../Searchbox';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
import { Task } from '../../__generated__/graphql-schema-generated';
import Image from 'next/image';
import { ModalCloseStyled } from './ModalClose.styled';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';

export const OverlayStyled = styled(Dialog.Overlay)`
  backdrop-filter: brightness(0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export interface CustomModalProps extends Partial<Task> {
  onClose?: () => void;
  onSubmit?: (task: Task) => void;
  type: 'create' | 'edit';
}
export const ModalAddEditTask: NextPage<CustomModalProps> = ({
  children,
  onSubmit,
  name,
  type,
}) => {
  const [taskNameValue, setTaskNameValue] = useState(name);

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
            placeholder={name || 'Task name'}
            fontSize={17}
            height={20}
            onChange={(e) => setTaskNameValue(e.target.value)}
          />
        </Dialog.Title>

        <Flex gap={16} alignItems="center" justifyContent="space-between">
          <div>
            <Flex>
              <Image src={'/icons/PlusMinusIcon.svg'} alt="" width={15} height={15} />
            </Flex>
          </div>
        </Flex>

        <Flex gap={24} alignItems="center">
          <ModalCloseStyled p={8}>Cancel</ModalCloseStyled>
          <ModalCloseStyled p={8} isPrimary onClick={() => console.log(taskNameValue)}>
            {type}
          </ModalCloseStyled>
        </Flex>
      </ModalContentStyled>
    </Dialog.Root>
  );
};
