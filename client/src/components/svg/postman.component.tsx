import { VariantProps, cva } from 'class-variance-authority';
import { SVGProps } from 'react';
import { cn } from '../../utils/cn';

const variants = cva('flex');

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function PostmanSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <g clipPath="url(#clip0_108_242)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M693.556 130.684C914.945 20.6265 1163.99 -21.3084 1409.21 10.182C1738.01 52.4048 2036.56 223.5 2239.21 485.835C2441.87 748.17 2532.02 1080.26 2489.84 1409.05C2458.38 1654.28 2354.91 1884.66 2192.51 2071.09C2030.11 2257.5 1816.07 2391.57 1577.48 2456.34C1338.88 2521.11 1086.43 2513.67 852.062 2434.97C617.691 2356.26 411.924 2209.82 260.783 2014.16C109.641 1818.52 19.9138 1582.43 2.94748 1335.78C-14.0189 1089.13 42.538 842.992 165.466 628.482C288.394 413.976 472.171 240.741 693.556 130.684ZM1759.71 488.635C1784.84 476.567 1812.34 470.287 1840.22 470.259C1882.9 470.123 1924.33 484.64 1957.59 511.384L1791.97 676.884C1790.52 678.335 1789.36 680.06 1788.57 681.957C1787.78 683.856 1787.38 685.891 1787.38 687.946C1787.38 690.002 1787.78 692.036 1788.57 693.935C1789.36 695.833 1790.52 697.557 1791.97 699.009L1918.72 825.759C1893.42 837.47 1865.83 843.36 1837.96 842.993C1810.09 842.626 1782.66 836.017 1757.68 823.642C1732.7 811.267 1710.82 793.454 1693.64 771.506C1676.47 749.558 1664.43 724.036 1658.41 696.82C1652.41 669.603 1652.58 641.386 1658.92 614.245C1665.26 587.103 1677.6 561.729 1695.05 539.991C1712.49 518.252 1734.59 500.703 1759.71 488.635ZM906.008 1331.23C905.008 1330.77 904.188 1329.99 903.703 1328.99C903.172 1327.99 903.031 1326.81 903.305 1325.7C903.586 1324.59 904.258 1323.63 905.203 1322.99L1025.08 1203.12L1109.2 1288.37L909.203 1331.49C908.141 1331.78 907.008 1331.69 906.008 1331.23ZM1980.34 532.876L1825.09 687.501L1946.84 809.251C1955.8 802.954 1964.17 795.837 1971.84 788.001C2005.2 754.407 2024.63 709.432 2026.2 662.108C2027.78 614.785 2011.39 568.617 1980.34 532.876ZM1666.95 818.259H1669.7C1672.85 818.407 1675.98 818.782 1679.08 819.384H1681.45C1693.24 821.751 1704.05 827.571 1712.53 836.087C1721.01 844.61 1726.77 855.462 1729.08 867.259C1729.7 868.759 1729.7 869.509 1729.7 871.759V878.509V882.634C1729.49 885.782 1729.07 888.907 1728.45 892.009C1728.32 892.554 1728.11 893.1 1727.91 893.645C1727.56 894.6 1727.2 895.554 1727.2 896.509C1726.63 898.587 1725.92 900.634 1725.08 902.634C1724.45 904.134 1723.83 905.634 1723.08 907.134C1721.75 909.767 1720.24 912.313 1718.58 914.759L1716.45 917.509C1714.22 920.407 1711.71 923.087 1708.95 925.509L1221.45 1353.38L1164.45 1296.38L1624.83 835.884C1627.46 833.313 1630.3 830.97 1633.33 828.884L1636.08 827.134C1638.39 825.681 1640.81 824.431 1643.33 823.384L1645.95 822.134C1649.3 820.884 1652.72 819.884 1656.2 819.134H1657.33C1660.5 818.524 1663.73 818.227 1666.95 818.259ZM1046.58 1181L1141.08 1275L1602.7 813.376C1617.73 798.688 1637.3 789.563 1658.2 787.501C1576.58 725.001 1487.58 741.376 1046.58 1181ZM1729.34 949.009L1734.96 943.509C1712.59 1080.01 1530.21 1265.13 1324.71 1459.51L1241.84 1376.76L1729.34 949.009ZM518.966 1945.62C519.22 1946.51 519.74 1947.29 520.455 1947.88C521.17 1948.45 522.047 1948.81 522.966 1948.87L735.466 1963.49L616.341 1844.37L519.966 1940.62C519.341 1941.27 518.916 1942.09 518.738 1942.97C518.562 1943.86 518.641 1944.77 518.966 1945.62ZM764.205 1947.87L638.581 1822.24L1026.95 1433.62L1214.45 1393.24L1301.95 1480.74C1171.58 1594.24 993.953 1707.87 773.705 1818.24C768.37 1821.01 764.109 1825.47 761.597 1830.92C759.084 1836.38 758.462 1842.52 759.83 1848.37L780.955 1938.62C781.531 1940.71 781.359 1942.95 780.468 1944.93C779.579 1946.91 778.027 1948.52 776.08 1949.49C774.216 1950.63 772.016 1951.09 769.854 1950.79C767.691 1950.49 765.696 1949.46 764.205 1947.87ZM1187.59 1366.75L1140.59 1319.75L1075.59 1384.63C1075.13 1385.19 1074.87 1385.9 1074.87 1386.63C1074.87 1387.36 1075.13 1388.06 1075.59 1388.63C1075.89 1389.29 1076.43 1389.83 1077.09 1390.13C1077.77 1390.42 1078.52 1390.47 1079.22 1390.25L1187.59 1366.75Z"
          className={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_108_242">
          <rect width="2500" height="2500" className={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
}
