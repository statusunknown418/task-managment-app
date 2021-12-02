import { ClockIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export const DatePickerToggle = styled.span`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 19px;
`;

export const DatePickerToggleIcon = styled.span`
  position: absolute;
  left: 650%;
  top: 50%;
  width: 250%;
  height: 100%;
  background-color: ${(props) => props.theme.accentBg};
`;

export const DatePickerInput = styled.input`
  background-color: ${(props) => props.theme.accentBg};
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.accentText};
  border-radius: 8px;
  padding: 0.5rem;
`;

export const DatePicker = ({ props }: { props: unknown }) => {
  return (
    <DatePickerToggle>
      <DatePickerInput {...props} type="date" />
      <DatePickerToggleIcon>
        <ClockIcon color="white" width={20} height={20} />
      </DatePickerToggleIcon>
    </DatePickerToggle>
  );
};
