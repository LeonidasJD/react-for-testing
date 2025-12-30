import { Link } from "@tanstack/react-router";
import { cn } from "../../utils/cn";

interface TanstackLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
}

const tanstackLinkVariantStyles = {
  primary:
    "text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200",
  secondary:
    "text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200",
  danger:
    "text-red-600 hover:text-red-700 hover:underline transition-colors duration-200",
  success:
    "text-green-600 hover:text-green-700 hover:underline transition-colors duration-200",
  outline:
    "border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700 transition-all duration-200",
} as const;

const TanstackLink = ({
  href,
  children,
  variant = "primary",
}: TanstackLinkProps) => {
  return (
    <Link to={href} className={cn(tanstackLinkVariantStyles[variant])}>
      {children}
    </Link>
  );
};

export default TanstackLink;
