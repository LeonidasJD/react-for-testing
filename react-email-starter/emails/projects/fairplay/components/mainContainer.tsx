import { Container } from "@react-email/components";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      style={{
        margin: "auto",
        maxWidth: "600px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
      }}
    >
      {children}
    </Container>
  );
};
