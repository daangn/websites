import { global } from '@karrotmarket/react-stitches/config';
export {
  styled,
  css,
  getCssString,
  keyframes,
} from '@karrotmarket/react-stitches/config';

export const globalStyles = global({
  '*': { margin: 0, padding: 0 },
  body: { fontFamily: '$system' },
});
