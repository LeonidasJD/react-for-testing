import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Row,
  Column,
  Section,
} from "@react-email/components";

const WelcomeEmail = () => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Heading style={{ fontSize: "24px", color: "#333" }}>
            Welcome Milan
          </Heading>
          <Text style={{ fontSize: "16px", color: "#333" }}>
            Thank you for signing up for our service. We are excited to have you
            on board.
          </Text>
        </Container>

        <Section style={{ marginTop: "20px" }}>
          <Row>
            <Column style={{ padding: "0 10px" }}>
              <Text style={{ fontSize: "16px", color: "#333" }}>
                Thank you for signing up for our service. We are excited to have
                you on board.
              </Text>
            </Column>

            <Column style={{ padding: "0 10px" }}>
              <Text style={{ fontSize: "16px", color: "#333" }}>
                Thank you for signing up for our service. We are excited to have
                you on board.
              </Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;
