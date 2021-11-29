import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { Task } from '../../../__generated__/graphql-schema-generated';
import { Flex } from '../../Flex';
import { CustomModalProps } from '../../ModalEditAddTask';
import { DueDateCard } from '../DueDateCard';
import dynamic from 'next/dynamic';
import { spriteTypes, UserAvatar } from '../../UserAvatar';
import { TagStyled } from '../Tags';

const DynamicModalAddEditTask = dynamic<CustomModalProps>(
  () => import('../../ModalEditAddTask').then((mod) => mod.ModalAddEditTask),
  { ssr: false }
);

interface Props {
  task: Partial<Task>;
}

enum pointsEnum {
  ZERO = '1',
  ONE = '2',
  TWO = '3',
  THREE = '4',
  FOUR = '5',
  FIVE = '6',
  SIX = '7',
  SEVEN = '8',
  EIGHT = '9',
}

export const TaskCard: NextPage<Props> = ({
  task: { id, dueDate, name, tags, pointEstimate, owner },
}) => {
  return (
    <Flex
      isCard
      alignItems="flex-start"
      direction="column"
      basis="1"
      p={16}
      rounded={8}
      style={{ minWidth: '100%' }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <p style={{ fontWeight: 'bolder' }}>{name}</p>
        <DynamicModalAddEditTask name={name} type="edit">
          <DotsHorizontalIcon />
        </DynamicModalAddEditTask>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mt={10}>
        <p style={{ fontWeight: 500 }}>
          {pointsEnum[pointEstimate !== undefined ? pointEstimate : 'ZERO']} pts
        </p>

        <DueDateCard dueDate={dueDate} />
      </Flex>

      <Flex alignItems="center" mt={10} gap={10}>
        {tags?.map((tag, id) => (
          <TagStyled key={id} tag={tag}>
            {tag.split('_').join(' ')}
          </TagStyled>
        ))}
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" mt={10}>
        {owner ? (
          <UserAvatar
            userName={owner.fullName}
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
