import { Button } from '@/component/BaseButton/BaseButton';

// const styles = stylex.create({
//   host: {
//     // color: [componentVars.color],
//   },
//   h1: {
//     fontFamily: 'system-ui, sans-serif',
//     fontSize: '2rem',
//   },
//   p: {
//     fontFamily: 'system-ui, sans-serif',
//     fontSize: '1rem',
//     marginBlock: 16,
//     lineHeight: 1.4,
//   },
// });

export default function Page() {
  return (
    <main>
      {/* <div {...stylex.props(styles.h1, styles.host)}>gffgfg</div> */}
      <Button color='yellow'>Button</Button>
      {/* <BottomNavigation /> */}
    </main>
  );
}
