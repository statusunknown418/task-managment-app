import { NextPage } from 'next';
import { SearchboxStyled } from './Searchbox.styled';
import { IconStyled } from './IconSidebar.styled';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { DialogMenu, DialogMenuProps } from '../DialogMenu';
import dynamic from 'next/dynamic';

const DynamicDialogMenu = dynamic<DialogMenuProps>(
  () => import('../DialogMenu/index').then((mod) => mod.DialogMenu),
  {
    ssr: false,
  }
);

export const SearchBox: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <IconStyled iconRight iconSize={'25px'}>
        <MagnifyingGlassIcon width={'20px'} height={'20px'} />
      </IconStyled>
      <SearchboxStyled type={'text'} placeholder="Search" />
      <IconStyled iconLeft iconSize={'25px'}>
        <DynamicDialogMenu />
      </IconStyled>
    </div>
  );
};
