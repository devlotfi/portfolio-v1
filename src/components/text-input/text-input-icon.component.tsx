import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes, useContext } from "react";
import { cn } from "../../utils/cn";
import { TextInputContext } from "./text-input.context";

const variants = cva(
  "flex justify-center items-center border-r text-[15pt] min-w-[2.8rem]",
  {
    variants: {
      variant: {
        primary: "text-primary-100 border-primary-100",
        success: "text-success-100 border-success-100",
        error: "text-error-100 border-error-100",
        warning: "text-warning-100 border-warning-100",
        "edge-100": "text-edge-100 border-edge-100",
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

export default function TextInputIcon({
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
