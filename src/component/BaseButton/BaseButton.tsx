import * as stylex from '@stylexjs/stylex';

import { ButtonProps } from './type';

const Button = ({ children, color }: ButtonProps) => {
  // const style = styles[color];
  const styles = smallStyles;
  const colorStyle = color && styles[color];
  return (
    <div>
      <div {...stylex.props(styles.root, colorStyle)}>{children}</div>
    </div>
  );
};

export { Button };

const buttonStyle = {
  root: {
    color: 'black',
    background: 'pink',

    /**
     * 디폴트 스타일 설정 해주면 됨
     */
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
  yellow: {
    color: 'yellow',
  },
};

// eslint-disable-next-line @stylexjs/valid-styles
const smallStyles = stylex.create({ ...buttonStyle });
