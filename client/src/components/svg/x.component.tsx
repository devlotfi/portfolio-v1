import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function XSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 2769 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        className={fillColor}
        d="M2187.27 0H2611.62L1679.89 1060.89L2768.45 2500H1914.21L1245.39 1625.46L479.705 2500H55.3506L1042.44 1365.31L0 0H875.461L1479.7 798.893L2187.27 0ZM2038.75 2250.92H2273.99L751.845 239.852H499.077L2038.75 2250.92Z"
      />
    </svg>
  );
}
