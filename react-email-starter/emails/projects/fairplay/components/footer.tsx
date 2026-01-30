import { Column, Img, Link, Row, Section } from "@react-email/components";

export const Footer = ({ baseUrl }: { baseUrl: string }) => {
  return (
    <Section
      style={{
        width: "100%",
        backgroundColor: "rgb(51, 51, 51)",
        padding: "46px 36px",
      }}
    >
      <Row>
        <Column style={{ width: "50%" }}>
          <Img
            src={`${baseUrl}/static/fairplay/footerLogo.png`}
            alt="Logo"
          ></Img>
        </Column>
        <Column style={{ width: "50%", textAlign: "right" }}>
          <Link
            href="https://www.dev.yes-to-fairplay.com/imprint"
            style={{
              display: "block",
              marginBottom: "10px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Imprint
          </Link>
          <Link
            href="https://www.dev.yes-to-fairplay.com/privacy-policy"
            style={{
              display: "block",
              marginBottom: "10px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.dev.yes-to-fairplay.com/terms-and-conditions"
            style={{
              display: "block",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Terms & Conditions
          </Link>
        </Column>
      </Row>
    </Section>
  );
};
