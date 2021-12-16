import { NextPage } from 'next';
import { CustomIcon } from '../../CustomIcon';
import { DueDateCardStyled } from './DueDateCardStyled';
export interface Props {
  dueDate: string;
}

export const DueDateCard: NextPage<Props> = ({ dueDate }) => {
  const flatDate = new Date(dueDate)
    .toDateString()
    .split(' ')
    .splice(1, 3)
    .join(' ');

  const isYesterday = (someDate: Date) => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    return (
      someDate.getDate() === yesterday.getDate() &&
      someDate.getMonth() === yesterday.getMonth() &&
      someDate.getFullYear() === yesterday.getFullYear()
    );
  };

  const isToday = (someDate: Date) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  return (
    <DueDateCardStyled dueDate={dueDate} padding={5} borderRadius={4} gap={10}>
      <CustomIcon width={20} height={20} />
      <p style={{ textTransform: 'uppercase' }}>
        {isToday(new Date(dueDate))
          ? 'Today '
          : isYesterday(new Date(dueDate))
          ? 'yesterday '
          : new Date() < new Date(dueDate)
          ? flatDate
          : `overdue`}
      </p>
    </DueDateCardStyled>
  );
};
