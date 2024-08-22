import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { HeadingContext } from "./heading.context";
import { cn } from "../../utils/cn";

const variants = cva(
  "flex border-l border-b pl-[0.7rem] bg-base-100 fill-mode-backward",
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

export default function HeadingText({ className, children, ...props }: Props) {
  const { variant } = useContext(HeadingContext);

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
