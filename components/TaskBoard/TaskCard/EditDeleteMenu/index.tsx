import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { ThemeProperties } from '../../../../styles/theme.config';
import { useDeleteTaskByIdMutation } from '../../../../__generated__/graphql-remastered';
import { Flex } from '../../../Flex';
import { CustomModalProps, ModalAddEditTask } from '../../../ModalEditAddTask';

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

export const EditDeleteMenu: NextPage<EditDeleteDropdownProps> = ({
  children,
  task: { id, dueDate, name, status, tags, pointEstimate },
}) => {
  const [deleteTask] = useDeleteTaskByIdMutation();

  const handleDeleteTask = async () => {
    try {
      toast.loading('Deleting task...', { duration: 500 });
      await deleteTask({
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
      toast.error('Error deleting task ...');
    }
  };

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>{children}</Dropdown.Trigger>
      <DropDownContentStyled>
        <DropDownItemStyled asChild>
          <div>
            <ModalAddEditTask
              type="edit"
              task={{ dueDate, id, name, pointEstimate, status, tags }}
            >
              <Flex gap={10} alignItems="center" justifyContent="space-between">
                <span>
                  <Pencil1Icon />
                </span>
                <p>Edit</p>
              </Flex>
            </ModalAddEditTask>
          </div>
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
