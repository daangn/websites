import { em, rem } from "polished";
import { colors } from "@karrotmarket/design-token";
import { createStitches } from "@stitches/react";

import { convertColorScheme } from "./colors";

export type MediaType = `@${"i" | "sm" | "md" | "lg" | "xl" | "xxl"}`;
export const MediaTypeList: MediaType[] = [
  "@i",
  "@sm",
  "@md",
  "@lg",
  "@xl",
  "@xxl",
];
export type MediaTypeMap<T> = Partial<{ [i in MediaType]: T }>;

// should exports `styled`, `css` and `getCssText`
export const { styled, css, globalCss, getCssText, theme, config } =
  createStitches({
    // follows Bootstrap's breakpoints practice
    // See https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints
    media: {
      i: `(min-width:  ${em(0)})`,
      sm: `(min-width: ${em(576)})`,
      md: `(min-width: ${em(768)})`,
      lg: `(min-width: ${em(992)})`,
      xl: `(min-width: ${em(1200)})`,
      xxl: `(min-width: ${em(1400)})`,
    },
    theme: {
      // @ts-ignore
      colors: convertColorScheme(colors.light.scheme),
      fonts: {
        noto: '"Noto Sans JP" sans-serif',
        gilroy: "Gilroy",
        system:
          '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      },
      fontSizes: {
        heading1: rem(72),
        heading2: rem(58),
        heading3: rem(42),
        heading4: rem(28),
        heading5: rem(24),
        subtitle1: rem(26),
        subtitle2: rem(20),
        subtitle3: rem(18),
        body1: rem(16),
        body2: rem(14),
        caption1: rem(13),
        caption2: rem(12),
      },
      lineHeights: {
        heading1: "115%",
        heading2: "115%",
        heading3: "120%",
        heading4: "120%",
        heading5: "120%",
        subtitle1: "120%",
        subtitle2: "120%",
        subtitle3: "140%",
        body1: "140%",
        body2: "140%",
        caption1: "140%",
        caption2: "140%",
      },
      sizes: {
        maxContent: rem(1150),
      },
      zIndices: {},
    },
    utils: {
      /**
       * override
       */
      marginTop: (value: number | string) => ({
        marginTop: typeof value === "string" ? value : rem(value),
      }),
      marginBottom: (value: number | string) => ({
        marginBottom: typeof value === "string" ? value : rem(value),
      }),

      rowGap: (value: number | string) => ({
        rowGap: typeof value === "string" ? value : rem(value),
      }),
      columnGap: (value: number | string) => ({
        columnGap: typeof value === "string" ? value : rem(value),
      }),

      /**
       * padding
       */
      p: (value: number | string) => ({
        padding: typeof value === "string" ? value : rem(value),
      }),
      pr: (value: number | string) => ({
        paddingRight: typeof value === "string" ? value : rem(value),
      }),
      pl: (value: number | string) => ({
        paddingLeft: typeof value === "string" ? value : rem(value),
      }),
      pt: (value: number | string) => ({
        paddingTop: typeof value === "string" ? value : rem(value),
      }),
      pb: (value: number | string) => ({
        paddingBottom: typeof value === "string" ? value : rem(value),
      }),

      /**
       * margin
       */
      m: (value: number | string) => ({
        margin: typeof value === "string" ? value : rem(value),
      }),
      mr: (value: number | string) => ({
        marginRight: typeof value === "string" ? value : rem(value),
      }),
      ml: (value: number | string) => ({
        marginLeft: typeof value === "string" ? value : rem(value),
      }),
      mt: (value: number | string) => ({
        marginTop: typeof value === "string" ? value : rem(value),
      }),
      mb: (value: number | string) => ({
        marginBottom: typeof value === "string" ? value : rem(value),
      }),

      /**
       * Space.tsx
       */
      h: (value: number | string) => ({
        width: rem(1),
        minHeight: typeof value === "string" ? value : rem(value),
        maxHeight: typeof value === "string" ? value : rem(value),
      }),
      w: (value: number | string) => ({
        width: rem(1),
        minWidth: typeof value === "string" ? value : rem(value),
        maxWidth: typeof value === "string" ? value : rem(value),
      }),

      /**
       * Html.tsx
       */
      highlightColor: (value) => ({
        "& strong": { color: value },
      }),

      paddingX: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      /**
       * Flex.tsx
       */
      row: () => ({
        flexDirection: "row",
      }),
      column: () => ({
        flexDirection: "column",
      }),
      jc: (value) => ({
        justifyContent: value,
      }),
      ai: (value) => ({
        alignItems: value,
      }),
      center: () => ({
        justifyContent: "center",
        alignItems: "center",
      }),
      rowCenterX: () => ({
        flexDirection: "row",
        justifyContent: "center",
      }),
      rowCenterY: () => ({
        flexDirection: "row",
        alignItems: "center",
      }),

      colCenterX: () => ({
        flexDirection: "column",
        alignItems: "center",
      }),
      colCenterY: () => ({
        flexDirection: "column",
        justifyContent: "center",
      }),

      contentArea: (value: boolean) =>
        value
          ? {
              boxSizing: "border-box",
              maxWidth: "$maxContent",
              margin: "0 auto",
              paddingX: rem(24),
            }
          : undefined,
    },
  });
