import {
  DashboardIcon,
  HamburgerMenuIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Flex } from '../Flex';
import { CustomModalProps } from '../ModalEditAddTask';
import { IconStyled } from '../Searchbox/IconSidebar.styled';

const DynamicAddTaskModal = dynamic<CustomModalProps>(
  () => import('../ModalEditAddTask').then((mod) => mod.ModalAddEditTask),
  {
    ssr: false,
  },
);

export const TaskNavbar: NextPage = () => {
  const router = useRouter();

  return (
    <Flex justifyContent="space-between" marginTop={32} marginBottom={16}>
      <Flex>
        <Link passHref href="/my-tasks">
          <IconStyled
            iconSize={40}
            currentRoute={router.pathname}
            routeName="/my-tasks"
          >
            <HamburgerMenuIcon height={20} width={20} />
          </IconStyled>
        </Link>

        <Link passHref href={'/'}>
          <IconStyled
            iconSize={40}
            currentRoute={router.pathname}
            routeName="/"
          >
            <DashboardIcon height={20} width={20} />
          </IconStyled>
        </Link>
      </Flex>

      <Flex>
        <DynamicAddTaskModal type="create" task={{}}>
          <PlusIcon height={24} width={24} />
        </DynamicAddTaskModal>
      </Flex>
    </Flex>
  );
};
