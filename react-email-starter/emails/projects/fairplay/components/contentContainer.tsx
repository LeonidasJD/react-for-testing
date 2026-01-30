import { Container } from "@react-email/components";

export const ContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container
      style={{
        padding: "48px 38px 28px 38px",
        width: "100%",
        maxWidth: "100%",
        margin: "0",
      }}
    >
      {children}
    </Container>
  );
};
