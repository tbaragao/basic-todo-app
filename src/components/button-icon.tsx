import Icon from "./icon";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center transition group cursor-pointer",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-gray-200 hover:bg-pink-base",
        terciary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "h-6 w-6 p-1 rounded-sm",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      terciary: " fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  className?: string;
  loading?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  loading,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={cx(buttonIconVariants({ variant: "none" }), size, className)}
      />
    );
  }
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        className={buttonIconIconVariants({ variant, size })}
        svg={IconComponent}
      />
    </button>
  );
}
