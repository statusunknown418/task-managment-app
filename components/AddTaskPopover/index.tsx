import { NextPage } from 'next';
import * as Popover from '@radix-ui/react-popover';
import { ContentStyled } from '../NotificationDialogMenu/Content.styled';
import { TriggerStyled } from '../NotificationDialogMenu/Trigger.styled';
import { SearchBox } from '../Searchbox';
import { SearchboxStyled } from '../Searchbox/Searchbox.styled';

interface FormInputs {
  title: string;
}
export const AddTaskPopover: NextPage = ({ children }) => {
  return (
    <Popover.Root>
      <TriggerStyled
      // bgColor={'#DA584B'}
      // triggerSize={34}
      // p={4}
      // triggerColor="white"
      // rounded={8}
      // hoverBgColor="#fa7c70"
      >
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
      <ContentStyled>
        <SearchboxStyled h={15} placeholder="Task Title" />
      </ContentStyled>
    </Popover.Root>
  );
};
