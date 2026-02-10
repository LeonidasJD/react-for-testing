import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "rounded-md transition-colors cursor-pointer",
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
      success: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
      outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    },
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
    disabled: {
      true: "cursor-not-allowed opacity-30",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
export type ButtonVariants = VariantProps<typeof buttonVariants>;
