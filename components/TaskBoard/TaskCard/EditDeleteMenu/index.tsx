import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { NextPage } from 'next';
import { CustomModalProps } from '../../../ModalEditAddTask';

export interface EditDeleteDropdownProps extends CustomModalProps {}

export const EditDeleteMenu: NextPage<EditDeleteDropdownProps> = ({
  children,
  task: { id },
}) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>{children}</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
