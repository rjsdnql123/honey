'use client';

import { BottomStyle } from './styles';
import { BottomProps } from './type';

const BottomNavigation = ({ color }: BottomProps) => {
  return (
    <BottomStyle $color={color}>
      <div>🏠</div>
      <div>메인</div>
      <div>🙆‍♂️</div>
    </BottomStyle>
  );
};

export { BottomNavigation };
