import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const VscodeSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2502 2488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1774.8 2476.93C1814.17 2492.27 1859.07 2491.28 1898.81 2472.16L2413.52 2224.49C2467.6 2198.47 2502 2143.73 2502 2083.68V404.332C2502 344.282 2467.61 289.544 2413.52 263.519L1898.81 15.8432C1846.65 -9.25394 1785.61 -3.10671 1739.84 30.173C1733.3 34.927 1727.07 40.235 1721.22 46.0845L735.878 945.037L306.68 619.239C266.725 588.912 210.841 591.397 173.733 625.152L36.0758 750.372C-9.31379 791.659 -9.36581 863.067 35.9633 904.424L408.178 1244L35.9633 1583.58C-9.36581 1624.93 -9.31379 1696.34 36.0758 1737.63L173.733 1862.85C210.841 1896.61 266.725 1899.09 306.68 1868.76L735.878 1542.97L1721.22 2441.92C1736.81 2457.51 1755.12 2469.26 1774.8 2476.93ZM1877.38 676.472L1129.73 1244L1877.38 1811.53V676.472Z"
        fill={color}
      />
      <path
        d="M2413.54 263.904L1898.42 15.8878C1838.8 -12.82 1767.54 -0.710438 1720.75 46.0825L34.4645 1583.58C-10.8923 1624.93 -10.8402 1696.34 34.577 1737.63L172.318 1862.85C209.448 1896.6 265.368 1899.09 305.345 1868.76L2336.02 328.247C2404.15 276.564 2502 325.154 2502 410.667V404.687C2502 344.662 2467.62 289.944 2413.54 263.904Z"
        fill={color}
      />
      <path
        d="M2413.54 2224.09L1898.42 2472.11C1838.8 2500.82 1767.54 2488.71 1720.75 2441.92L34.4645 904.422C-10.8923 863.067 -10.8402 791.657 34.577 750.369L172.318 625.149C209.448 591.394 265.368 588.909 305.345 619.237L2336.02 2159.75C2404.15 2211.43 2502 2162.84 2502 2077.33V2083.31C2502 2143.34 2467.62 2198.05 2413.54 2224.09Z"
        fill={color}
      />
      <path
        d="M1898.45 2472.16C1838.8 2500.85 1767.55 2488.71 1720.75 2441.91C1778.41 2499.57 1877 2458.74 1877 2377.19V110.803C1877 29.259 1778.41 -11.5774 1720.75 46.0825C1767.55 -0.714664 1838.8 -12.8424 1898.45 15.8401L2413.47 263.517C2467.59 289.542 2502 344.279 2502 404.329V2083.68C2502 2143.73 2467.59 2198.46 2413.47 2224.49L1898.45 2472.16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1773.28 2476.93C1812.65 2492.26 1857.55 2491.28 1897.29 2472.16L2412 2224.49C2466.08 2198.47 2500.48 2143.73 2500.48 2083.68V404.332C2500.48 344.279 2466.09 289.542 2412 263.517L1897.29 15.8417C1845.14 -9.25546 1784.09 -3.10824 1738.32 30.1713C1731.78 34.9255 1725.55 40.2335 1719.7 46.083L734.357 945.034L305.16 619.239C265.207 588.909 209.321 591.397 172.214 625.149L34.5563 750.369C-10.8333 791.659 -10.8854 863.067 34.4438 904.422L406.657 1244L34.4438 1583.58C-10.8854 1624.93 -10.8333 1696.34 34.5563 1737.63L172.214 1862.85C209.321 1896.6 265.207 1899.09 305.16 1868.76L734.357 1542.96L1719.7 2441.92C1735.29 2457.51 1753.59 2469.26 1773.28 2476.93ZM1875.86 676.472L1128.21 1244L1875.86 1811.53V676.472Z"
        fill={color}
      />
    </svg>
  );
};
export default VscodeSVG;
