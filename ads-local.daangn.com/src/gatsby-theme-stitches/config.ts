import { em, rem } from "polished";
import { colors } from "@karrotmarket/design-token";
import { createStitches, createTheme } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { convertColorScheme } from "./colors";

// should exports `styled`, `css` and `getCssString`
export const { styled, css, globalCss, getCssText, theme, keyframes } =
  createStitches({
    // follows Bootstrap's breakpoints practice
    // See https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints
    media: {
      sm: `(min-width: ${em(576)})`,
      md: `(min-width: ${em(768)})`,
      lg: `(min-width: ${em(992)})`,
      xl: `(min-width: ${em(1200)})`,
      xxl: `(min-width: ${em(1400)})`,
    },
    theme: {
      colors: convertColorScheme(colors.light.scheme),
      fonts: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      fontSizes: {
        heading1: rem(72),
        heading2: rem(60),
        heading3: rem(54),
        heading4: rem(42),
        subtitle1: rem(32),
        subtitle2: rem(26),
        subtitle3: rem(20),
        subtitle4: rem(18),
        body1: rem(18),
        body2: rem(16),
        body3: rem(15),
        caption1: rem(14),
        caption2: rem(13),
        caption3: rem(12),
      },
      lineHeights: {
        heading1: rem(90),
        heading2: rem(80),
        heading3: rem(73),
        heading4: rem(57),
        subtitle1: rem(48),
        subtitle2: rem(39),
        subtitle3: rem(31),
        subtitle4: rem(28),
        body1: rem(30),
        body2: rem(28),
        body3: rem(26),
        caption1: rem(24),
        caption2: rem(22),
        caption3: "auto",
      },
      sizes: {
        maxContent: rem(1200),
      },
      zIndices: {},
    },
    utils: {
      typography: (
        value:
          | Stitches.PropertyValue<"fontSize">
          | Stitches.PropertyValue<"lineHeight">
      ) => ({
        fontSize: value,
        lineHeight: value,
      }),
      marginX: (value: number | string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: number | string) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value: number | string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: number | string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });

export const darkTheme = createTheme("dark-theme", {
  colors: convertColorScheme(colors.dark.scheme),
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  body: {
    fontFamily: "$body",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
