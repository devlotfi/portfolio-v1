import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function HtmlSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M529.297 0H641.602V111.328H745.117V0H857.422V336.914H745.117V224.609H642.578V336.914H529.297M1005.86 112.305H906.738V0H1217.77V112.305H1118.16V336.914H1005.86M1267.09 0H1384.77L1457.03 118.652L1529.3 0H1646.97V336.914H1534.67V169.922L1456.05 291.016L1377.44 169.922V336.914H1267.09M1702.64 0H1814.94V225.586H1974.12V336.914H1702.64"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1975.81 2298.61L2137.16 491H366L527.187 2298.9L1250.5 2499.69L1975.81 2298.61ZM1249.02 860.84H693.359L753.906 1530.76H1249.02V1531.25H1522.46L1496.58 1819.34L1249.51 1885.61L1001.95 1819.34L986.328 1642.09H763.672L794.922 1990.23L1250 2117.19V2115.94L1703.12 1990.23L1764.16 1309.57H1250H1249.02H957.031L936.523 1082.52H1249.02H1250H1784.18L1804.69 860.84H1250H1249.02Z"
        className={fillColor}
      />
    </svg>
  );
}
