import { Link } from "@tanstack/react-router";
import {
  tanstackLinkVariants,
  type TanstackLinkVariants,
} from "../../variants/tanstackLinkVariants";

interface TanstackLinkProps extends TanstackLinkVariants {
  href: string;
  children: React.ReactNode;
}

const TanstackLink = ({
  href,
  children,
  variant = "primary",
}: TanstackLinkProps) => {
  const variants = tanstackLinkVariants({ variant });
  return (
    <Link
      activeProps={{
        className: `${variants} hover:text-white  font-bold  text-white bg-red-500 p-2 rounded-md`,
      }}
      to={href}
      className={variants}
    >
      {children}
    </Link>
  );
};

export default TanstackLink;
