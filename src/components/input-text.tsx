import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const inputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "px-2 pb-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  className?: string;
}

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      type="text"
      {...props}
    />
  );
}
