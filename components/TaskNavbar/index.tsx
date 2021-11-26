import { useQuery } from '@apollo/client';
import {
  DashboardIcon,
  HamburgerMenuIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { AddTaskPopover, AddTaskPopoverProps } from '../AddTaskPopover';
import { Flex } from '../Flex';
import { IconStyled } from '../Searchbox/IconSidebar.styled';
import dynamic from 'next/dynamic';

const DynamicAddTaskPopover = dynamic<AddTaskPopoverProps>(
  () => import('../AddTaskPopover').then((mod) => mod.AddTaskPopover),
  {
    ssr: false,
  }
);

export const TaskNavbar: NextPage = () => {
  const router = useRouter();

  return (
    <Flex justifyContent="space-between" mt={32} mb={16}>
      <Flex>
        <IconStyled
          iconSize={40}
          currentRoute={router.pathname}
          routeName="/my-tasks"
        >
          <HamburgerMenuIcon height={20} width={20} />
        </IconStyled>

        <IconStyled iconSize={40} currentRoute={router.pathname} routeName="/">
          <DashboardIcon height={20} width={20} />
        </IconStyled>
      </Flex>

      <Flex>
        <DynamicAddTaskPopover>
          <PlusIcon height={24} width={24} />
        </DynamicAddTaskPopover>
      </Flex>
    </Flex>
  );
};
