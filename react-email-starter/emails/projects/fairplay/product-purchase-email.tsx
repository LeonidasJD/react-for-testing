import {
  Html,
  Body,
  Heading,
  Text,
  Row,
  Column,
  Section,
  Hr,
} from "@react-email/components";
import { Header } from "./components/header";
import { EmailHead } from "./components/emailHead";
import { MainContainer } from "./components/mainContainer";
import { ContentContainer } from "./components/contentContainer";
import { Footer } from "./components/footer";
import { CustomLink } from "./components/customLink";

type ProductPurchaseEmailProps = {
  name: string;
  eSimPrice: string;
  productName: string;
  productPrice: string;
  totalPrice: string;
  textUrl: string;
};

const ProductPurchaseEmail = ({
  name,
  eSimPrice,
  productName,
  productPrice,
  totalPrice,
  textUrl,
}: ProductPurchaseEmailProps) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

  return (
    <Html>
      <EmailHead />
      <Body
        style={{
          margin: "0",
          backgroundColor: "#f6f6f6",
        }}
      >
        <MainContainer>
          <Header baseUrl={baseUrl} />
          <ContentContainer>
            <Section style={{ width: "100%" }}>
              <Heading
                style={{
                  margin: "0 auto",
                  textAlign: "center",
                  color: "rgb(61, 93, 22)",
                  textTransform: "uppercase",
                }}
              >
                DEAR {name},
              </Heading>
            </Section>
            <Section style={{ margin: "28px 0px 0px 0px" }}>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#333",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                Thank you for your recent purchase with FairPlay! Your payment
                was successful, and we’re now getting your service ready.
              </Text>
            </Section>

            <Section style={{ margin: "28px 0px 28px 0px" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  margin: "0px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                RECEIPT :
              </Text>
            </Section>
            <Section>
              <Row
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "10px",
                }}
              >
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    eSIM
                  </Text>
                </Column>
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    {eSimPrice}
                  </Text>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    {productName}
                  </Text>
                </Column>
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    €{productPrice}
                  </Text>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    TOTAL
                  </Text>
                </Column>
                <Column style={{ width: "50%" }}>
                  <Text
                    style={{
                      textAlign: "right",
                      fontWeight: "bold",
                      margin: "0px",
                      fontSize: "16px",
                    }}
                  >
                    €{totalPrice}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={{ margin: "28px 0px 0px 0px" }}>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#333",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                You'll receive a follow-up email shortly with service details,
                including activation instructions if needed. If you have any
                questions, feel free to contact us via our{" "}
                <CustomLink href={textUrl}>
                  www.dev.yes-to-fairplay.com/help-center/contact-support
                </CustomLink>
              </Text>
            </Section>
            <Hr
              style={{
                borderTop: "1px solid #e0e0e0",
                margin: "70px 0px 70px 0px ",
              }}
            />
            <Section style={{ margin: "0px 0px 48px 0px" }}>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#333",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                Kind regards,
              </Text>
              <Text
                style={{
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#333",
                  textAlign: "center",
                  margin: "0px",
                  fontWeight: "bold",
                }}
              >
                FAIRPLAY MOBILE
              </Text>
            </Section>
          </ContentContainer>
          <Footer baseUrl={baseUrl} />
        </MainContainer>
      </Body>
    </Html>
  );
};

export default ProductPurchaseEmail;
