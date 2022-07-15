import { Container, Row, Text } from '@nextui-org/react';

export default function Header() {
  return (
    <Container fluid>
      <Row justify="center">
        <Text
          h1
          size="5rem"
          css={{
            textGradient: '45deg, $red600 -18%, $yellow600 70%'
          }}
          weight="bold"
        >
          Hi there, I&apos;m Kaye.
        </Text>
      </Row>
    </Container>
  );
}
