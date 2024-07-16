import { VariantProps, cva } from "class-variance-authority";
import { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const variants = cva(
  "flex flex-1 bg-transparent min-h-[2.8rem] px-[0.5rem] placeholder-edge-200 outline-none",
  {
    variants: {
      variant: {
        primary: "border-primary-100 text-primary-100",
        success: "border-success-100 text-success-100",
        error: "border-error-100 text-error-100",
        warning: "border-warning-100 text-warning-100",
        "edge-100": "border-edge-100 text-edge-100",
      },
      active: {
        true: "text-base-100",
      },
    },
    defaultVariants: {
      variant: "edge-100",
    },
  }
);

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof variants> {}

export default function TextAreaField({
  variant,
  className,
  active,
  ...props
}: Props) {
  return (
    <textarea
      className={cn(variants({ variant, className, active }))}
      {...props}
    ></textarea>
  );
}
