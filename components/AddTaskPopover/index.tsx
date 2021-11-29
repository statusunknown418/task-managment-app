import { NextPage } from 'next';
import * as Popover from '@radix-ui/react-popover';
import { ContentStyled } from '../NotificationDialogMenu/Content.styled';
import { TriggerStyled } from '../NotificationDialogMenu/Trigger.styled';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';
import { Flex } from '../Flex';

import styled from 'styled-components';
interface FormInputs {
  title: string;
}

export interface AddTaskPopoverProps {}

export const AddTaskPopover: NextPage<AddTaskPopoverProps> = ({ children }) => {
  return (
    <Popover.Root>
      <TriggerStyled>
        <span
          style={{
            backgroundColor: '#DA584B',
            width: '34px',
            height: '42px',
            paddingTop: '10px',
            paddingInline: '4px',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          {children}
        </span>
      </TriggerStyled>
      <ContentStyled sideOffset={10}>
        <Flex direction="column" alignItems="flex-start">
          <SearchboxStyled
            p={16}
            h={20}
            fontWeight="700"
            placeholder="Task Title"
            style={{ outline: 'none' }}
          />
          <Popover.Root>
            <TriggerStyled p={16}>
              <Flex>
                <strong>Estimate</strong>
              </Flex>
            </TriggerStyled>
            <ContentStyled style={{ width: '100%' }} sideOffset={-10}>
              <Flex
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                style={{ minWidth: '100%' }}
              >
                <span>1 point</span>
                <span>1 point</span>
                <span>1 point</span>
                <span>1 point</span>
              </Flex>
            </ContentStyled>
          </Popover.Root>
        </Flex>
      </ContentStyled>
    </Popover.Root>
  );
};
