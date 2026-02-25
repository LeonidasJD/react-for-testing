import { tv, type VariantProps } from "tailwind-variants";

export const tanstackLinkVariants = tv({
  base: "text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200",
  variants: {
    variant: {
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
    },
    active: {
      primary:
        "text-blue-700 hover:text-blue-800 hover:underline transition-colors duration-200",
      secondary:
        "text-gray-800 hover:text-gray-900 hover:underline transition-colors duration-200",
      danger:
        "text-red-700 hover:text-red-800 hover:underline transition-colors duration-200",
      success:
        "text-green-700 hover:text-green-800 hover:underline transition-colors duration-200",
      outline:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type TanstackLinkVariants = VariantProps<typeof tanstackLinkVariants>;
