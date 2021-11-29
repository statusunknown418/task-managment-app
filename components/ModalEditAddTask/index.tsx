import { NextPage } from 'next';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';
import { Task } from '../../__generated__/graphql-schema-generated';
import Image from 'next/image';
import { ModalCloseStyled } from './ModalClose.styled';
import { ModalContentStyled } from './ModalContent.styled';
import { ModalTriggerStyled } from './ModalTrigger.styled';
import {
  PointEstimate,
  useUpdateTaskMutation,
} from '../../__generated__/graphql-remastered';
import { useForm } from 'react-hook-form';

export const OverlayStyled = styled(Dialog.Overlay)`
  backdrop-filter: brightness(0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export interface CustomModalProps {
  task: Partial<Task>;
  type: 'create' | 'edit';
}
export const ModalAddEditTask: NextPage<CustomModalProps> = ({
  children,
  type,
  task,
}) => {
  interface MutationData {
    taskName: string;
    points: number;
  }
  const [updateTask, { data, error, loading }] = useUpdateTaskMutation();
  const { register, setValue, handleSubmit } = useForm<MutationData>();

  const onSubmitHandler = handleSubmit(async (data) => {
    const { taskName, points } = data;
    await updateTask({
      variables: {
        updateTaskInput: {
          id: task.id,
          name: taskName,
          pointEstimate: PointEstimate.EIGHT,
        },
      },
    });
    console.log({ data, error });
  });

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
            placeholder={task.name || 'Task name'}
            fontSize={17}
            height={20}
            {...register('taskName', { required: true })}
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
          <ModalCloseStyled p={8} onClick={() => onSubmitHandler()} type="submit">
            {type}
          </ModalCloseStyled>
        </Flex>
      </ModalContentStyled>
    </Dialog.Root>
  );
};
