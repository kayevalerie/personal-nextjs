import type { ReactElement } from 'react';
import Head from 'next/head';
import { Row, Text, Link } from '@nextui-org/react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <Row justify="center">
      <Link href="mailto:contact@kayevalerie.dev">
        <Text
          h6
          size="1.8rem"
          color="$yellow200"
          css={{
            backgroundColor: '$textBackground',
            padding: '0.8rem'
          }}
        >
          Get in touch with me: contact@kayevalerie.dev
        </Text>
      </Link>
    </Row>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Home - Kaye Valerie</title>
      </Head>

      <Layout>{page}</Layout>
    </>
  );
};
export default Page;
