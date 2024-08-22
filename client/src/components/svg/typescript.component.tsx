import { VariantProps, cva } from 'class-variance-authority';
import { SVGProps } from 'react';
import { cn } from '../../utils/cn';

const variants = cva('flex');

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function TypescriptSVG({
  className,
  fillColor,
  ...props
}: Props) {
  return (
    <svg
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <g clipPath="url(#clip0_98_8)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V2500H2500V0H0ZM548.125 1356.25V1254.38L550 1255V1152.5L987.5 1150.63C1228.12 1150.63 1426.25 1151.25 1426.25 1153.13C1428.75 1154.38 1428.75 1200 1428.75 1256.25V1356.25H1103.75V2281.25H873.125V1356.25H548.125ZM2165 1239.38C2121.25 1193.75 2072.5 1165 2008.75 1150L2010 1148.75C1966.88 1137.5 1863.75 1133.75 1820 1142.5C1685 1167.5 1590.62 1255 1563.75 1380C1555 1415.63 1558.12 1504.38 1567.5 1540.63C1580 1582.5 1606.88 1633.13 1636.25 1665.63C1687.5 1719.38 1742.5 1754.38 1871.88 1809.38C1984.38 1859.38 2024.38 1881.88 2044.38 1909.38C2058.75 1931.25 2063.12 1944.38 2063.12 1973.13C2063.12 2004.38 2053.12 2026.88 2030 2048.13C1976.25 2096.88 1867.5 2102.5 1786.25 2060.63C1759.38 2045.63 1713.12 2001.88 1692.5 1969.38L1676.25 1947.5L1605.62 1988.75L1511.88 2043.13L1488.12 2058.13C1485.62 2062.5 1530 2129.38 1553.12 2154.38C1611.88 2218.75 1707.5 2268.75 1807.5 2287.5C1854.38 2295.63 1954.38 2296.88 1998.13 2289.38C2137.5 2266.25 2235 2195.63 2275 2091.25C2310.62 1995.63 2298.75 1868.13 2245.62 1786.88C2198.75 1714.38 2121.25 1663.75 1942.5 1586.88C1845.62 1544.38 1814.38 1523.75 1797.5 1489.38C1790 1473.13 1786.25 1461.88 1786.25 1441.88C1786.25 1376.25 1836.25 1336.88 1911.25 1341.88C1963.12 1345.63 1996.25 1365.63 2028.75 1411.88C2038.75 1428.13 2048.75 1438.75 2051.25 1436.88C2116.88 1396.25 2225 1323.13 2225 1319.38C2222.5 1308.13 2188.12 1264.38 2165 1239.38Z"
          className={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_98_8">
          <rect width="2500" height="2500" className={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}
