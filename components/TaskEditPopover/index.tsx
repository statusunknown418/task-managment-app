import { NextPage } from 'next';
import { PopoverArrow, Root as PopoverRoot } from '@radix-ui/react-popover';
import { ContentStyled } from '../NotificationDialogMenu/Content.styled';
import { TriggerStyled } from '../NotificationDialogMenu/Trigger.styled';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Flex } from '../Flex';

export const TaskEditPopover: NextPage = () => {
  return (
    <PopoverRoot>
      <TriggerStyled>
        <DotsHorizontalIcon width={15} height={15} />
      </TriggerStyled>
      <ContentStyled>
        <Flex
          p={10}
          direction="column"
          alignItems="flex-start"
          justifyContent="space-between"
          gap={5}
        >
          <h1>TaskEditPopover</h1>
        </Flex>
      </ContentStyled>
    </PopoverRoot>
  );
};
