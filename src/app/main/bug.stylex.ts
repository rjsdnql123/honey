import * as stylex from '@stylexjs/stylex';
const DARK = '@media (prefers-color-scheme: dark)';

const vars = {
  color: 'blue',
};

// const add = {
//   primaryText: { default: 'black', [DARK]: 'blue' },
//   secondaryText: { default: '#333', [DARK]: '#ccc' },
//   accent: { default: 'blue', [DARK]: 'lightblue' },
//   background: { default: 'white', [DARK]: 'black' },
//   lineColor: { default: 'gray', [DARK]: 'lightgray' },
// };

export const colors = stylex.defineVars({
  primaryText: { default: 'black', [DARK]: 'green' },
  secondaryText: { default: '#333', [DARK]: '#ccc' },
  accent: { default: 'blue', [DARK]: 'lightblue' },
  background: { default: 'white', [DARK]: 'black' },
  lineColor: { default: 'gray', [DARK]: 'lightgray' },
  asdf: 'background',
});

export const componentVars = stylex.defineVars(vars);

export const tokens = stylex.defineVars({
  primaryText: 'black',
  secondaryText: '#333',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});
