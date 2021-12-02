import { NextPage } from 'next';
import { LayoutStyled, SearchBox, Sidebar, TaskNavbar } from '../exports';

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Sidebar />
      <LayoutStyled>
        <SearchBox />
        <TaskNavbar />
        {children}
      </LayoutStyled>
    </>
  );
};
