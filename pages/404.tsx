import type { ReactElement } from 'react';
import Head from 'next/head';
import { Row, Text, Link } from '@nextui-org/react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <Row justify="center">
      <Link href="/">
        <Text h6 size="2rem">
          Page not found. Go back home
        </Text>
      </Link>
    </Row>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Page Not Found - Kaye Valerie</title>
      </Head>

      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
