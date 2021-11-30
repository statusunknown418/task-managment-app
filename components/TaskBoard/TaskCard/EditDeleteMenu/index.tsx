import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { NextPage } from 'next';
import { CustomModalProps, ModalAddEditTask } from '../../../ModalEditAddTask';

export interface EditDeleteDropdownProps extends CustomModalProps {}

export const EditDeleteMenu: NextPage<EditDeleteDropdownProps> = ({
  children,
  task: { id, dueDate, name, status, tags, pointEstimate },
}) => {
  return (
    <Dropdown.Root onOpenChange={(open) => false}>
      <Dropdown.Trigger>{children}</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item asChild>
          <ModalAddEditTask
            type="edit"
            task={{ dueDate, id, name, pointEstimate, status, tags }}
          >
            Edit
          </ModalAddEditTask>
        </Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
