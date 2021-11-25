import { useQuery } from '@apollo/client';
import { DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { IconStyled } from '../Searchbox/IconSidebar.styled';
import { TaskNavbarStyled } from './TaskNavbar.styled';

export const TaskNavbar: NextPage = () => {
  const router = useRouter();

  return (
    <TaskNavbarStyled>
      <IconStyled
        iconSize={40}
        currentRoute={router.pathname}
        routeName="/my-tasks"
      >
        <HamburgerMenuIcon height={20} width={20} />
      </IconStyled>

      <IconStyled
        iconSize={40}
        bordered
        currentRoute={router.pathname}
        routeName="/"
      >
        <DashboardIcon height={20} width={20} />
      </IconStyled>
    </TaskNavbarStyled>
  );
};
