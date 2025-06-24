import { cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main"> {
  children: React.ReactNode;
}

export function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {children}
    </main>
  );
}
