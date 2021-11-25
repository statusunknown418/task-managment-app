import { NextPage } from 'next';
import { SearchboxStyled } from './Searchbox.styled';
import { IconStyled } from './IconSidebar.styled';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';

export interface SearchBoxProps {
  iconLeft?: boolean;
  iconRight?: boolean;
}
export const SearchBox: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <IconStyled iconRight>
        <SearchIcon />
      </IconStyled>
      <SearchboxStyled type={'text'} placeholder="Search" />
      <IconStyled iconLeft>
        <BellIcon />
      </IconStyled>
    </div>
  );
};
