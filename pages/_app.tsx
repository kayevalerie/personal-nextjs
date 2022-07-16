import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '$cyan700',
      contentBackground: '#FEF9A7',
      textBackground: '$yellow900'
    }
  }
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1a1919',
      contentBackground: '#1a1919',
      textBackground: '#fff'
    }
  }
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const darkMode = useDarkMode();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
}
