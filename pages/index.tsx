import React from 'react';
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
    <React.Fragment>
      <Head>
        <title>Hello</title>
      </Head>

      <Layout>{page}</Layout>
    </React.Fragment>
  );
};
export default Page;
