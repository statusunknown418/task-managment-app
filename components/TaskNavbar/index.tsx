import {
  DashboardIcon,
  HamburgerMenuIcon,
  ListBulletIcon,
} from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { TaskNavbarStyled } from './TaskNavbar.styled';

interface Props {}

export const TaskNavbar: NextPage<Props> = () => {
  return (
    <TaskNavbarStyled>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <HamburgerMenuIcon height={20} width={20} />
        </div>

        <div
          style={{
            border: '1px solid #DA584B',
            width: '40px',
            height: '40px',
            padding: '10px',
            borderRadius: '8px',
            color: '#DA584B',
          }}
        >
          <DashboardIcon height={18} width={18} />
        </div>
      </div>
    </TaskNavbarStyled>
  );
};
