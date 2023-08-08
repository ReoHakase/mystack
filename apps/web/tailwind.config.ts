import tailwindScrollbar from 'tailwind-scrollbar';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';
import { createThemes } from 'tw-colors';

// NOTE: スエイリアスを使うとTailwindが読み込んでくれなくなる
import { coreColors } from './src/styles/tokens/colors/core';
import { darkColors } from './src/styles/tokens/colors/dark';
import { lightColors } from './src/styles/tokens/colors/light';

// import { breakpoints } from '@/styles/tokens/breakpoints';

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  // Tailwind CSSのユーティリティセレクタ`dark:`に対応するCSSセレクタ
  // この場合、`dark:`は`[data-theme="dark"] `に置き換えられる
  darkMode: ['class', '[data-theme="dark"]'], // 必ず`next-themes`の設定と合わせる！
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: coreColors.plum,
      info: coreColors.cyan,
      success: coreColors.green,
      warning: coreColors.yellow,
      danger: coreColors.crimson,
      keyplate: coreColors.slate,
      ...coreColors,
    },
    extend: {
      boxShadow: {
        card: '0px 4px 16px rgba(0, 0, 0, 0.05)',
        floating: '0px 4px 32px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        article: [
          '1.125rem',
          {
            lineHeight: '1.55', // 155%
          },
        ],
        heading1: [
          '2.5rem',
          {
            fontWeight: '700',
          },
        ],
        heading2: [
          '2rem',
          {
            fontWeight: '700',
          },
        ],
        heading3: [
          '1.75rem',
          {
            fontWeight: '700',
          },
        ],
        small: '0.75rem',
      },
      lineHeight: {
        medium: '1.55',
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    createThemes({
      // `.theme-light`か`data-theme='light'`のついている要素(の子孫)に適用される
      light: {
        primary: lightColors.plum,
        info: lightColors.cyan,
        success: lightColors.green,
        warning: lightColors.yellow,
        danger: lightColors.crimson,
        keyplate: lightColors.slate,
      },
      // `.theme-dark`か`data-theme='dark'`のついている要素(の子孫)に適用される
      dark: {
        primary: darkColors.plum,
        info: darkColors.cyan,
        success: darkColors.green,
        warning: darkColors.yellow,
        danger: darkColors.crimson,
        keyplate: darkColors.slate,
      },
    }),
  ],
};

// Tailwind Variantsの機能の一つであるResponsive Variantsを有効化する
// Refer: https://www.tailwind-variants.org/docs/getting-started
export default withTV(config);
