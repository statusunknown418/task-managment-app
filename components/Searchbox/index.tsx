import { NextPage } from 'next';
import { SearchboxStyled } from './Searchbox.styled';
import { IconStyled } from './IconSidebar.styled';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { DialogMenuProps } from '../NotificationDialogMenu';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicDialogMenu = dynamic<DialogMenuProps>(
  () => import('../NotificationDialogMenu/index').then((mod) => mod.DialogMenu),
  {
    ssr: false,
  }
);

export const SearchBox: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <IconStyled absolutePosition iconRight iconSize={20} isOnSearchbox>
        <MagnifyingGlassIcon width={'20px'} height={'20px'} />
      </IconStyled>

      <SearchboxStyled type={'text'} placeholder="Search" />

      <IconStyled absolutePosition iconLeft iconSize={20} isOnSearchbox>
        <DynamicDialogMenu />
      </IconStyled>
    </div>
  );
};
