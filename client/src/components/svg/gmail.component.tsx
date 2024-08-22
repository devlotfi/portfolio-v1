import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function GmailSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 3334 2501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M757.576 2501H227.273C101.894 2501 0 2399.49 0 2273.73V644.94V341.909C0 60.8487 320.455 -99.3786 545.455 69.182L757.576 228.273L1666.67 910.091L2575.76 228.273L2787.88 69.182C3012.5 -99.3786 3333.33 60.8487 3333.33 341.909V644.94V2273.73C3333.33 2399.11 3231.82 2501 3106.06 2501H2575.76V1213.12L1666.67 1894.94L757.576 1213.12V2501Z"
        className={fillColor}
      />
    </svg>
  );
}
