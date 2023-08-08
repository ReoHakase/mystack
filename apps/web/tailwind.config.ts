import tailwindScrollbar from 'tailwind-scrollbar';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore // NOTE: `tailwindcss-animate`の型定義がない
import tailwindAnimate from 'tailwindcss-animate';
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
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: {
        DEFAULT: 'hsl(var(--primary))', // shadcn/ui
        foreground: 'hsl(var(--primary-foreground))', // shadcn/ui
        ...coreColors.plum,
      },
      info: coreColors.cyan,
      success: coreColors.green,
      warning: coreColors.yellow,
      danger: coreColors.crimson,
      keyplate: coreColors.slate,
      ...coreColors,

      // ===== shadcn/ui =====
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      // ========================
    },
    extend: {
      borderRadius: {
        // shadcn/ui
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
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
      keyframes: {
        // shadcn/ui
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    tailwindAnimate, // shadcn/ui
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
