import { Grid, Spacer } from '@nextui-org/react';
import { useMediaQuery } from '../utils/useMediaQuery';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const isMd = useMediaQuery(768);

  return (
    <Grid.Container
      direction="column"
      gap={1}
      css={{
        backgroundColor: '$contentBackground'
      }}
    >
      <Grid>
        <Spacer y={isMd ? 7 : 14} />
        <Header />
      </Grid>
      <Grid>
        <main>{children}</main>
        <Footer />
      </Grid>
    </Grid.Container>
  );
}
