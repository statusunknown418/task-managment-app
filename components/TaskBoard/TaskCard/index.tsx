import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Task } from '../../../__generated__/graphql-remastered';
import { Flex } from '../../Flex';
import { spriteTypes, UserAvatar } from '../../UserAvatar';
import { DueDateCard } from '../DueDateCard';
import { TagStyled } from '../Tags';
import { EditDeleteDropdownProps } from './EditDeleteMenu';

const DynamicEditDeleteDropdown = dynamic<EditDeleteDropdownProps>(
  () => import('./EditDeleteMenu').then((mod) => mod.EditDeleteMenu),
  { ssr: false },
);

interface Props {
  task: Partial<Task>;
}

export enum pointsEnum {
  EIGHT = '8',
  FOUR = '4',
  ONE = '1',
  TWO = '2',
  ZERO = '0',
}

export const TaskCard: NextPage<Props> = ({
  task: { id, dueDate, name, tags, pointEstimate, creator },
}) => {
  return (
    <Flex
      isCard
      alignItems="flex-start"
      direction="column"
      basis="1"
      padding={16}
      borderRadius={8}
      style={{ minWidth: '100%' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <p style={{ fontWeight: 'bolder' }}>{name}</p>
        <DynamicEditDeleteDropdown
          task={{ dueDate, name, tags, pointEstimate, id }}
          type="edit"
        >
          <DotsHorizontalIcon />
        </DynamicEditDeleteDropdown>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" marginTop={10}>
        <p style={{ fontWeight: 500 }}>
          {pointsEnum[pointEstimate !== undefined ? pointEstimate : 'ZERO']} pts
        </p>

        <DueDateCard dueDate={dueDate} />
      </Flex>

      <Flex wrap={'wrap'} alignItems="center" marginTop={10} gap={10}>
        {tags?.map((tag, id) => (
          <TagStyled key={id} tag={tag}>
            {tag.split('_').join(' ')}
          </TagStyled>
        ))}
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" marginTop={10}>
        {creator ? (
          <UserAvatar
            userName={creator.fullName}
            height={25}
            width={25}
            spriteType={spriteTypes.BOTTTS}
          />
        ) : (
          <small>Couldn&apos;t retrieve owner 😞</small>
        )}
      </Flex>
    </Flex>
  );
};
