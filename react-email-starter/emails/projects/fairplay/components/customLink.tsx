import { Link } from "@react-email/components";

export const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      style={{
        color: "rgb(131, 190, 46)",
        textDecoration: "underline",
      }}
      href={href}
    >
      {children}
    </Link>
  );
};
