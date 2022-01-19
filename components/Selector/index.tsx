import { NextPage } from 'next';
import { SelectorProps, SelectorStyled } from './Selector.styled';

interface Props extends SelectorProps {
  name: string;
}

export const Selector: NextPage<Props> = ({
  name,
  children,
  isFirst,
  currentRoute,
  routeName,
}) => {
  return (
    <SelectorStyled
      isFirst={isFirst}
      currentRoute={currentRoute}
      routeName={routeName}
    >
      {children}
      <p style={{ textTransform: 'uppercase' }}>{name}</p>
    </SelectorStyled>
  );
};
