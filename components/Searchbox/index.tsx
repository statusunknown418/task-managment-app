import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { DialogMenuProps } from '../NotificationDialogMenu/index';
import { IconStyled } from './IconSidebar.styled';
import { SearchboxStyled } from './Searchbox.styled';

const DynamicDialogMenu = dynamic<DialogMenuProps>(
  () => import('../NotificationDialogMenu/index').then((mod) => mod.DialogMenu),
  {
    ssr: false,
  },
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
