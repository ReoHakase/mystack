import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../providers';

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
