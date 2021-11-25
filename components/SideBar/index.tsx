import { NextPage } from 'next';
import { SidebarStyled } from './Sidebar.styled';
import Image from 'next/image';
import { Selector } from '../Selector';
import { DashboardIcon } from '@radix-ui/react-icons';

export const Sidebar: NextPage = () => {
  return (
    <SidebarStyled>
      <Image src={'/RavnIcon.svg'} width={40} height={40} alt="logo" />
      <Selector name="dashboard" isFirst isSelected>
        <DashboardIcon style={{ width: '20px' }} />
      </Selector>
    </SidebarStyled>
  );
};
