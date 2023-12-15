'use client';

import { ButtonStyle } from './styles';
import { ButtonProps } from './type';

const Button = ({ children, color }: ButtonProps) => {
  return (
    <ButtonStyle $color={color}>
      <div>{children}</div>
    </ButtonStyle>
  );
};

export { Button };
