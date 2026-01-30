import { Font, Head } from "@react-email/components";

export const EmailHead = () => {
  return (
    <Head>
      <Font
        fontFamily="Helvetica"
        fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
        fontStyle="normal"
        fontWeight="400"
      />
    </Head>
  );
};
