import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);
