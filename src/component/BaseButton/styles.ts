import styled from '@emotion/styled';

import { ButtonStyleProps } from './type';
export const ButtonStyle = styled.button<ButtonStyleProps>`
  /*
    BaseButton Base Style
*/
  all: unset;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 56px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;

  color: ${(props) => props.$color || 'black'};
  background: rgb(68, 163, 255);
`;
