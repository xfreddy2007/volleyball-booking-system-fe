/* eslint-disable import/no-named-as-default */
import { Suspense } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileSidebar from '@/components/Header/MobileSidebar';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Loading from '@/components/Loading';
import { SessionProvider } from 'next-auth/react';

type newAppProps = AppProps & {
  pageProps: {
    session: any;
  };
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: newAppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Head>
        <title>排球Queue</title>
        <meta property="og:title" content="排球Queue" />
        <meta property="og:url" content="https://www.volleyballqueue.com/" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/54787518/196040501-22b0812e-4acd-4534-8759-1d09b995dcc6.jpeg"
        />
        <meta
          property="og:description"
          content="A place for volleyball lovers to arrange and book a volleyball event easy and fast."
        />
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
        <link rel="canonical" href="https://www.volleyballqueue.com/" />
        <link
          href="https://user-images.githubusercontent.com/54787518/196039228-7f6d226e-c28e-4e07-8c24-40fb91c99088.png"
          rel="icon"
        />
      </Head>
      <Header />
      <MobileSidebar />
      <Suspense fallback={<Loading />}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Suspense>
      <Footer />
    </Provider>
  );
};

export default MyApp;
