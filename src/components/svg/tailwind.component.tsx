import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function TailwindSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 4167 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M2083.28 0C1527.73 0 1180.53 277.773 1041.66 833.36C1250 555.547 1493.08 451.377 1770.85 520.85C1929.33 560.43 2042.6 675.47 2168 802.719C2372.24 1010.03 2608.66 1250 3125.02 1250C3680.57 1250 4027.77 972.227 4166.68 416.64C3958.34 694.453 3715.26 798.623 3437.49 729.15C3279.01 689.57 3165.74 574.53 3040.34 447.281C2836.06 239.965 2599.68 0 2083.28 0ZM1041.66 1250C486.113 1250 138.906 1527.77 0 2083.36C208.34 1805.55 451.377 1701.38 729.15 1770.85C887.67 1810.51 1000.9 1925.47 1126.3 2052.72C1330.54 2260.03 1567 2500 2083.32 2500C2638.91 2500 2986.11 2222.23 3125.02 1666.64C2916.68 1944.45 2673.6 2048.62 2395.83 1979.15C2237.35 1939.57 2124.08 1824.53 1998.68 1697.32C1794.44 1489.97 1558.02 1250 1041.66 1250Z"
        className={fillColor}
      />
    </svg>
  );
}
