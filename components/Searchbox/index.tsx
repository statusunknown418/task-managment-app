import { NextPage } from 'next';
import { SearchboxStyled } from './Searchbox.styled';
import { IconStyled } from './IconSidebar.styled';
import { BellIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const SearchBox: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <IconStyled iconRight iconSize={'25px'}>
        <MagnifyingGlassIcon width={'20px'} height={'20px'} />
      </IconStyled>
      <SearchboxStyled type={'text'} placeholder="Search" />
      <IconStyled iconLeft iconSize={'25px'}>
        <BellIcon width={'20px'} height={'20px'} />
      </IconStyled>
    </div>
  );
};
