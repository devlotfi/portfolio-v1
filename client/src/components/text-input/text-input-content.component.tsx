import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import { TextInputContext } from "./text-input.context";

const variants = cva(
  "flex flex-1 bg-base-100 duration-300 border border-edge-100 has-[:focus]:translate-x-[0.5rem] has-[:focus]:translate-y-[1.1rem] z-10",
  {
    variants: {
      variant: {
        primary: "border-primary-100",
        success: "border-success-100",
        error: "border-error-100",
        warning: "border-warning-100",
        "edge-100": "border-edge-100",
      },
    },
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export default function TextInputContent({
  className,
  children,
  ...props
}: Props) {
  const { variant } = useContext(TextInputContext);

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className={cn(variants({ variant: variant as any, className }))}
      {...props}
    >
      {children}
    </div>
  );
}
