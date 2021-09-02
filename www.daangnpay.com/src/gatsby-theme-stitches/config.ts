import { globalCss } from '@karrotmarket/react-stitches/config';
export {
  styled,
  css,
  getCssText,
  keyframes,
} from '@karrotmarket/react-stitches/config';

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: { fontFamily: '$system' },
});
