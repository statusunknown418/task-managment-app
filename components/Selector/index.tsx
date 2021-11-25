import { NextPage } from 'next';
import { FC, SVGProps } from 'react';
import { PStyled, SelectorProps, SelectorStyled } from './Selector.styled';

interface Props extends SelectorProps {
  name: string;
}

export const Selector: NextPage<Props> = ({
  name,
  children,
  isFirst,
  isSelected,
}) => {
  return (
    <SelectorStyled isFirst={isFirst} isSelected={isSelected}>
      {children}
      <PStyled>{name}</PStyled>
    </SelectorStyled>
  );
};
