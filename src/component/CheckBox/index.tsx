'use client';

import { CheckboxStyle } from './styles';
import { CheckboxProps } from './type';

const Checkbox = ({ checkboxState = false, checkboxOnchange }: CheckboxProps) => {
  return (
    <CheckboxStyle
      checked={checkboxState}
      type='checkbox'
      onChange={(e) => checkboxOnchange(e.target.checked)}></CheckboxStyle>
  );
};

export { Checkbox };
