import { NextPage } from 'next';
import { SidebarStyled } from './Sidebar.styled';
import Image from 'next/image';
import { Selector } from '../Selector';
import { HomeIcon } from '@heroicons/react/outline';

export const Sidebar: NextPage = () => {
  return (
    <SidebarStyled>
      <Image src={'/RavnIcon.svg'} width={40} height={40} alt="logo" />
      <Selector name="dashboard" isFirst isSelected>
        <HomeIcon style={{ width: '20px' }} />
      </Selector>
    </SidebarStyled>
  );
};
