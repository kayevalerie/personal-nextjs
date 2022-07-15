import { Grid, Spacer } from '@nextui-org/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Grid.Container
      direction="column"
      gap={1}
      css={{
        backgroundColor: '$contentBackground'
      }}
    >
      <Grid>
        <Spacer y={14} />
        <Header />
      </Grid>
      <Grid>
        <main>{children}</main>
        <Footer />
      </Grid>
    </Grid.Container>
  );
}
