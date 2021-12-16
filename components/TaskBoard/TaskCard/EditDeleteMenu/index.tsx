import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import {
  GetAllTaskStatusDocument,
  useDeleteTaskByIdMutation,
} from '../../../../__generated__/graphql-remastered';
import dynamic from 'next/dynamic';
import { Flex } from '../../../Flex';
import { CustomModalProps } from '../../../ModalEditAddTask';

const DynamicAddEditModal = dynamic<CustomModalProps>(
  () => import('../../../ModalEditAddTask').then((mod) => mod.ModalAddEditTask),
  {
    ssr: false,
  },
);

export interface EditDeleteDropdownProps extends CustomModalProps {}

export const DropDownContentStyled = styled(Dropdown.DropdownMenuContent)`
  border: 1px solid #94979a;
  background-color: #393d41;
  padding-inline: 14px;
  padding-block: 6px;
  border-radius: 8px;
  outline: none;
  &:focus-within {
    outline: none;
  }
`;

export const DropDownItemStyled = styled(Dropdown.DropdownMenuItem)`
  outline: none;
  cursor: pointer;
`;

export const DropDownTriggerStyled = styled(
  Dropdown.DropdownMenuTrigger,
)<Dropdown.DropdownMenuTriggerProps>`
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.accentBg};
  color: ${(props) => props.theme.accentText};
`;

export const EditDeleteMenu: NextPage<EditDeleteDropdownProps> = ({
  children,
  task: { id, dueDate, name, status, tags, pointEstimate },
}) => {
  const [deleteTask] = useDeleteTaskByIdMutation();

  const handleDeleteTask = async () => {
    try {
      toast.loading('Deleting task...', { duration: 500 });
      await deleteTask({
        refetchQueries: [GetAllTaskStatusDocument, 'getAllTasks'],
        variables: {
          deleteTaskInput: {
            id,
          },
        },
      });

      toast.success('Task deleted successfully', {
        style: {
          backgroundColor: '#333',
          color: '#fff',
        },
      });
    } catch (error) {
      toast.error('Error deleting task ...', {
        duration: 500,
        style: {
          backgroundColor: '#411f1f',
          color: '#fff',
        },
      });
    } finally {
      window.location.reload();
    }
  };

  return (
    <Dropdown.Root>
      <DropDownTriggerStyled>{children}</DropDownTriggerStyled>
      <DropDownContentStyled sideOffset={-30}>
        <DropDownItemStyled asChild>
          <DynamicAddEditModal
            type="edit"
            task={{ dueDate, id, name, pointEstimate, status, tags }}
          >
            <Flex gap={10}>
              <span>
                <Pencil1Icon />
              </span>
              <p>Edit</p>
            </Flex>
          </DynamicAddEditModal>
        </DropDownItemStyled>
        <DropDownItemStyled asChild onClick={handleDeleteTask}>
          <div>
            <Flex gap={10} alignItems="center" justifyContent="space-between">
              <span>
                <TrashIcon width={20} height={20} />
              </span>
              <p>Delete</p>
            </Flex>
          </div>
        </DropDownItemStyled>
      </DropDownContentStyled>
    </Dropdown.Root>
  );
};
