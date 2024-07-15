import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

const SpringBootSVG = ({
  className,
  fillColor,
  ...props
}: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2503 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <g clipPath="url(#clip0_108_181)">
        <path
          d="M2278.35 144.33C2243.57 227.76 2198.55 306.543 2144.33 378.866C2028.24 258.772 1889.25 163.183 1735.57 97.7541C1581.89 32.3251 1416.65 -1.6144 1249.62 -2.05618C1082.59 -2.49796 917.175 30.567 763.151 95.1821C609.128 159.797 469.629 254.65 352.91 374.128C236.191 493.606 144.622 635.281 83.6214 790.772C22.6209 946.262 -6.57166 1112.41 -2.22916 1279.38C2.11334 1446.35 39.9027 1610.76 108.903 1762.87C177.903 1914.97 276.713 2051.7 399.485 2164.95L445.876 2206.19C621.926 2354.66 835.635 2451.51 1063.34 2486.01C1291.04 2520.52 1523.85 2491.32 1735.98 2401.67C1948.11 2312.01 2131.29 2165.39 2265.23 1978.05C2399.17 1790.7 2478.64 1569.94 2494.85 1340.21C2530.93 1025.77 2435.57 623.711 2278.35 144.33ZM579.897 2175.26C566.646 2191.54 548.864 2203.53 528.8 2209.71C508.736 2215.9 487.29 2215.99 467.172 2209.99C447.054 2203.98 429.167 2192.15 415.772 2175.99C402.376 2159.82 394.074 2140.05 391.913 2119.16C389.753 2098.28 393.832 2077.22 403.634 2058.66C413.437 2040.09 428.523 2024.85 446.986 2014.85C465.449 2004.86 486.46 2000.56 507.365 2002.51C528.269 2004.45 548.129 2012.55 564.433 2025.77C585.807 2043.88 599.351 2069.54 602.233 2097.41C605.116 2125.27 597.112 2153.16 579.897 2175.26ZM2270.62 1801.55C1963.92 2211.34 1304.12 2072.17 884.021 2092.78C884.021 2092.78 809.278 2097.94 734.536 2108.25C734.536 2108.25 762.887 2095.36 798.969 2082.47C1095.36 1979.38 1234.54 1958.76 1414.95 1865.98C1752.58 1693.3 2090.21 1314.43 2157.22 922.68C2028.35 1298.97 1636.6 1623.71 1280.93 1755.15C1036.08 1845.36 595.361 1932.99 595.361 1932.99L577.32 1922.68C278.351 1775.77 268.041 1126.29 814.433 917.526C1054.12 824.742 1280.93 876.289 1541.24 814.433C1817.01 750 2136.6 543.814 2265.46 273.196C2409.79 708.763 2585.05 1384.02 2270.62 1801.55Z"
          className={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_108_181">
          <rect width="2502.58" height="2500" className={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SpringBootSVG;
