import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { AppProvider } from '../providers';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
