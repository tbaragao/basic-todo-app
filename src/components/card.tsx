import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const cardVariants = cva(
  "bg-white border-gray-200 border border-solid rounded-lg shadow-sm ",
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  }
);

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
