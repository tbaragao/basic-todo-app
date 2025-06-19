import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariables = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariables>,
    Omit<React.ComponentProps<"div">, "size"> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: "string";
}

export default function Container({
  as = "div",
  size,
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariables({ size, className }),
      ...props,
    },
    children
  );
}
