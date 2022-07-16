import type { ReactElement } from 'react';
import Head from 'next/head';
import { Row, Text } from '@nextui-org/react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <Row justify="center">
      <Text h6 size="2rem">
        Stay tuned for more.
      </Text>
    </Row>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>About - Kaye Valerie</title>
      </Head>

      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
