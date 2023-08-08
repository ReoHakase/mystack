export const breakpoints = {
  mobile: {
    minWidth: 320,
    mediaQuery: '(min-width: 320px)',
  },
  tablet: {
    minWidth: 640,
    mediaQuery: '(min-width: 640px)',
  },
  desktop: {
    minWidth: 1024,
    mediaQuery: '(min-width: 1024px)',
  },
} as const satisfies Record<string, { minWidth: number; mediaQuery: string }>;
