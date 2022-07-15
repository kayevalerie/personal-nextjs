import type { ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import { Row, Text } from '@nextui-org/react';

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
  return <Layout>{page}</Layout>;
};

export default Page;
