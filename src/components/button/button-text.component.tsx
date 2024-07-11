import { VariantProps, cva } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const variants = cva("z-10 flex-1 text-center ml-[0.5rem]", {
  variants: {
    variant: {
      primary: "",
      success: "",
      error: "",
      warning: "",
      "edge-100": "",
    },
  },
  defaultVariants: {
    variant: "edge-100",
  },
});

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

const ButtonText = ({
  variant,
  className,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={cn(variants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};
export default ButtonText;
