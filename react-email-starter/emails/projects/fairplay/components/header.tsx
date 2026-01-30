import { Img } from "@react-email/components";
import { Section } from "@react-email/components";
import { Hr } from "@react-email/components";

export const Header = ({ baseUrl }: { baseUrl: string }) => {
  return (
    <Section>
      <Img
        style={{
          margin: "0 auto",
          padding: "10px 0px",
          display: "block",
        }}
        src={`${baseUrl}/static/fairplay/testLogo.png`}
        alt="Logo"
      />
      <Hr style={{ borderTop: "1px solid #e0e0e0", margin: "0" }} />
    </Section>
  );
};
