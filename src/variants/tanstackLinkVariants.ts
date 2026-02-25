import { tv, type VariantProps } from "tailwind-variants";

export const tanstackLinkVariants = tv({
  base: "text-blue-600 hover:text-blue-700 hover:no-underline transition-colors duration-200",
  variants: {
    variant: {
      primary: "text-blue-600 hover:text-blue-700",
      secondary: "text-gray-600 hover:text-gray-800",
      danger: "text-red-600 hover:text-red-700",
      success: "text-green-600 hover:text-green-700",
      outline:
        "border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 text-gray-700 transition-all ",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type TanstackLinkVariants = VariantProps<typeof tanstackLinkVariants>;
