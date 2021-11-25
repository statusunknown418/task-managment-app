import { NextPage } from 'next';
import { SearchBox } from '../Searchbox';
import { Sidebar } from '../SideBar';
import { LayoutStyled } from './Layout.styled';

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Sidebar />

      <LayoutStyled>
        <SearchBox />
        {children}
      </LayoutStyled>
    </>
  );
};
