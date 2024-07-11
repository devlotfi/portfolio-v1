import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const NestSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2588 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1499.86 41.4727C1482.16 41.4727 1465.73 45.2652 1450.56 50.3216C1482.8 71.8119 1500.49 100.255 1509.34 132.491C1509.98 136.915 1511.24 140.076 1511.87 144.5C1512.51 148.292 1513.14 152.085 1513.14 155.877C1515.67 211.499 1498.6 218.452 1486.59 251.32C1468.26 293.668 1473.32 339.177 1495.44 375.837C1497.33 380.262 1499.86 385.318 1503.02 389.743C1479 229.829 1612.37 205.811 1637.02 155.877C1638.92 112.264 1602.89 83.1892 1574.45 62.963C1547.27 46.5292 1522.62 41.4727 1499.86 41.4727ZM1700.86 77.5006C1698.33 92.0382 1700.23 88.2457 1699.6 95.8306C1698.96 100.887 1698.96 107.208 1698.33 112.264C1697.07 117.321 1695.8 122.377 1693.91 127.434C1692.65 132.491 1690.75 137.547 1688.85 142.604C1686.32 147.66 1684.43 152.085 1681.9 157.141C1680 159.671 1678.74 162.198 1676.84 164.726C1675.58 166.622 1674.31 168.519 1673.05 170.415C1669.89 174.839 1666.73 179.264 1663.57 183.056C1659.78 186.849 1656.62 191.273 1652.19 194.434V195.066C1648.4 198.227 1644.61 202.019 1640.18 205.179C1626.91 215.292 1611.74 222.877 1597.84 232.358C1593.41 235.519 1588.99 238.047 1585.19 241.839C1580.77 245 1576.98 248.16 1573.18 251.953C1568.76 255.745 1565.6 259.537 1561.81 263.962C1558.65 267.754 1554.85 272.179 1552.33 276.603C1549.17 281.028 1546.01 285.452 1543.48 289.877C1540.95 294.933 1539.05 299.358 1536.52 304.414C1534.63 309.471 1532.73 313.895 1531.47 318.952C1529.57 324.64 1528.31 329.697 1527.04 334.754C1526.41 337.283 1526.41 340.442 1525.78 342.97C1525.15 345.5 1525.15 348.027 1524.52 350.555C1524.52 355.612 1523.88 361.301 1523.88 366.357C1523.88 370.149 1523.88 373.942 1524.52 377.734C1524.52 382.791 1525.15 387.847 1526.41 393.536C1527.05 398.592 1528.31 403.649 1529.57 408.706C1531.47 413.762 1532.73 418.819 1534.63 423.875C1535.89 427.036 1537.79 430.196 1539.05 432.724L1393.68 376.47C1369.03 369.517 1345.01 363.197 1320.36 357.508C1307.09 354.348 1293.81 351.187 1280.54 348.027C1242.61 340.442 1204.06 334.754 1165.5 330.961C1164.24 330.961 1163.61 330.328 1162.34 330.328C1124.42 326.536 1087.13 324.64 1049.2 324.64C1021.39 324.64 993.579 325.903 966.4 327.8C927.844 330.329 889.288 335.385 850.732 341.705C841.25 342.969 831.769 344.866 822.288 346.762C802.694 350.554 783.732 354.979 765.402 359.404C755.921 361.933 746.44 364.46 736.959 366.988C727.478 370.781 718.629 375.205 709.78 378.998C702.827 382.158 695.875 385.318 688.922 388.479C687.659 389.112 686.393 389.112 685.762 389.742C679.441 392.902 673.752 395.43 668.064 398.591C666.167 399.224 664.903 399.854 663.639 400.487C656.686 403.647 649.734 407.44 644.045 410.6C639.62 412.496 635.196 415.025 631.404 416.921C629.507 418.184 626.979 419.45 625.715 420.081C620.026 423.242 614.338 426.402 609.281 429.562C603.593 432.723 598.536 435.883 594.111 439.043C589.687 442.204 585.263 444.732 581.47 447.892C580.837 448.525 580.207 448.525 579.574 449.155C575.781 451.685 571.357 454.844 567.565 458.004C567.565 458.004 566.931 458.637 566.301 459.268C563.141 461.797 559.981 464.324 556.82 466.852C555.557 467.485 554.291 468.748 553.028 469.381C549.868 471.911 546.707 475.07 543.547 477.599C542.914 478.862 541.651 479.495 541.018 480.128C537.225 483.92 533.433 487.08 529.64 490.873C529.007 490.873 529.007 491.506 528.377 492.136C524.585 495.296 520.792 499.089 517 502.881C516.367 503.514 516.367 504.144 515.737 504.144C512.577 507.305 509.416 510.465 506.256 514.257C504.993 515.521 503.095 516.787 501.831 518.05C498.671 521.842 494.879 525.635 491.086 529.427C490.453 530.69 489.19 531.323 488.557 532.587C483.5 537.644 479.076 542.701 474.019 547.757C473.386 548.39 472.756 549.02 472.123 549.653C462.01 560.399 451.265 571.144 439.888 580.625C428.51 590.738 416.501 600.219 404.492 608.436C391.85 617.285 379.841 624.87 366.568 632.454C353.926 639.407 340.653 645.728 326.747 651.417C313.474 657.105 299.568 662.162 285.663 666.586C259.116 672.275 231.937 683.02 208.55 684.916C203.494 684.916 197.805 686.179 192.749 686.812C187.06 688.075 182.003 689.342 176.947 690.605C171.89 692.501 166.834 694.397 161.777 696.293C156.721 698.189 151.664 700.718 146.608 703.246C142.183 706.406 137.127 708.935 132.702 712.095C128.278 715.255 123.853 719.048 120.061 722.84C115.636 726.001 111.212 730.425 107.419 734.217C103.627 738.642 99.8344 742.435 96.6741 746.859C93.5138 751.915 89.7214 756.34 87.193 761.396C84.0327 765.821 80.8724 770.878 78.344 775.934C75.8148 781.623 73.2876 786.679 71.3913 792.368C69.4951 797.424 67.5989 803.113 65.7027 808.802C64.4395 813.858 63.1734 818.915 62.5424 823.971C62.5424 824.605 61.9094 825.234 61.9094 825.867C60.6462 831.556 60.6462 839.141 60.0131 842.934C59.3801 847.358 58.75 851.15 58.75 855.575C58.75 858.104 58.75 861.263 59.383 863.792C60.0161 868.216 60.6462 872.009 61.9123 875.801C63.1755 879.593 64.4416 883.386 66.3366 887.178V887.811C68.2329 891.604 70.7613 895.396 73.2894 899.189C75.8186 902.981 78.3461 906.774 81.5064 910.566C84.6667 913.726 88.4591 917.519 92.2516 920.679C96.044 924.471 99.8365 927.632 104.261 930.792C119.431 944.065 123.223 948.49 142.817 958.603C145.977 960.499 149.138 961.763 152.93 963.66C153.564 963.66 154.194 964.293 154.827 964.293C154.827 965.556 154.827 966.189 155.46 967.453C156.093 972.51 157.356 977.566 158.62 982.623C159.883 988.311 161.781 993.368 163.677 997.792C165.573 1001.59 166.837 1005.38 168.733 1009.17C169.366 1010.43 169.996 1011.7 170.629 1012.33C173.159 1017.39 175.686 1021.81 178.214 1026.24C181.375 1030.66 184.535 1035.08 187.695 1039.51C190.855 1043.3 194.648 1047.73 198.44 1051.52C202.233 1055.31 206.025 1058.47 210.45 1062.26C210.45 1062.26 211.083 1062.9 211.713 1062.9C215.505 1066.06 219.298 1069.22 223.09 1071.75C227.515 1074.91 231.939 1077.43 236.996 1079.96C241.42 1082.49 246.477 1085.02 251.533 1086.92C255.326 1088.81 259.75 1090.08 264.175 1091.34C264.808 1091.97 265.438 1091.97 266.704 1092.6C269.233 1093.24 272.392 1093.87 274.921 1094.5C273.025 1128.63 272.391 1160.87 277.45 1172.24C283.138 1184.89 310.95 1146.33 338.761 1102.08C334.968 1145.7 332.44 1196.89 338.761 1212.06C345.713 1227.87 383.638 1178.56 416.505 1124.21C864.642 1020.55 1273.59 1330.26 1316.57 1767.65C1308.35 1699.39 1224.29 1661.47 1185.73 1670.95C1166.77 1717.72 1134.54 1777.77 1082.71 1815.06C1087.13 1773.34 1085.24 1730.36 1076.39 1688.64C1062.48 1746.79 1035.3 1801.15 998.009 1847.93C937.962 1852.35 877.915 1823.28 846.312 1779.66C843.783 1777.77 843.152 1773.97 841.255 1771.45C839.359 1767.02 837.463 1762.6 836.199 1758.17C834.303 1753.75 833.039 1749.32 832.406 1744.9C831.773 1740.47 831.773 1736.05 831.773 1730.99C831.773 1727.83 831.773 1724.67 831.773 1721.51C832.406 1717.09 833.669 1712.66 834.934 1708.24C836.197 1703.81 837.463 1699.39 839.358 1694.97C841.887 1690.54 843.782 1686.12 846.943 1681.69C857.688 1651.35 857.688 1626.7 838.094 1612.16C834.302 1609.64 830.509 1607.74 826.085 1605.84C823.555 1605.21 820.396 1603.95 817.868 1603.31C815.972 1602.68 814.708 1602.05 812.811 1601.42C808.387 1600.15 803.962 1598.89 799.538 1598.26C795.113 1596.99 790.689 1596.36 786.264 1596.36C781.84 1595.73 776.783 1595.1 772.359 1595.1C769.199 1595.1 766.038 1595.73 762.878 1595.73C757.821 1595.73 753.397 1596.36 748.972 1597.63C744.548 1598.26 740.123 1598.89 735.699 1600.16C731.274 1601.42 726.85 1602.69 722.425 1604.58C718.001 1606.48 714.208 1608.37 709.784 1610.27C705.992 1612.17 702.199 1614.69 697.775 1616.59C550.502 1712.66 638.36 1937.68 738.859 2002.78C700.935 2009.74 662.379 2017.95 651.634 2026.17C651.001 2026.8 650.371 2027.43 650.371 2027.43C677.55 2043.87 705.993 2057.77 735.7 2069.78C776.152 2083.06 819.133 2095.07 838.095 2100.12V2100.76C890.557 2111.5 943.651 2115.29 997.376 2112.13C1277.38 2092.54 1506.82 1879.53 1548.54 1598.89C1549.8 1604.58 1551.07 1609.64 1552.33 1615.33C1554.23 1626.7 1556.76 1638.71 1558.02 1650.72V1651.36C1559.28 1657.04 1559.92 1662.73 1560.55 1667.79V1670.32C1561.18 1676.01 1561.81 1681.7 1561.81 1686.75C1562.45 1693.71 1563.08 1700.66 1563.08 1707.61V1717.72C1563.08 1720.88 1563.71 1724.68 1563.71 1727.84C1563.71 1731.63 1563.08 1735.42 1563.08 1739.21V1748.06C1563.08 1752.49 1562.44 1756.28 1562.44 1760.7C1562.44 1763.23 1562.44 1765.76 1561.81 1768.92C1561.81 1773.35 1561.18 1777.77 1561.18 1782.83C1560.54 1784.72 1560.54 1786.62 1560.54 1788.52C1559.91 1793.57 1559.28 1798 1558.65 1803.05C1558.65 1804.95 1558.65 1806.85 1558.01 1808.74C1557.38 1815.06 1556.12 1820.75 1555.49 1827.07V1827.71V1828.34C1554.22 1834.03 1552.96 1840.35 1551.69 1846.04V1847.93C1550.43 1853.62 1549.16 1859.31 1547.9 1865C1547.9 1865.63 1547.27 1866.89 1547.27 1867.53C1546 1873.22 1544.74 1878.9 1542.84 1884.59V1886.49C1540.95 1892.81 1539.05 1898.5 1537.79 1904.19C1537.15 1904.82 1537.15 1905.45 1537.15 1905.45C1535.26 1911.77 1533.36 1918.09 1531.47 1924.41C1528.94 1930.73 1527.04 1936.42 1524.51 1942.74C1521.98 1949.06 1520.09 1955.38 1517.56 1961.07C1515.03 1967.39 1512.5 1973.08 1509.98 1979.4H1509.34C1506.81 1985.09 1504.28 1991.41 1501.12 1997.1C1500.49 1999 1499.86 2000.26 1499.23 2001.53C1498.6 2002.16 1498.6 2002.79 1497.96 2003.42C1456.88 2086.22 1396.2 2158.91 1320.35 2215.8C1315.3 2218.96 1310.24 2222.75 1305.18 2226.54C1303.92 2227.8 1302.02 2228.44 1300.76 2229.7C1296.33 2232.86 1291.91 2236.02 1286.85 2239.18L1288.75 2242.98H1289.38C1298.23 2241.71 1307.08 2240.45 1315.93 2239.18H1316.56C1333 2236.65 1349.43 2233.49 1365.86 2230.33C1370.29 2229.7 1375.35 2228.44 1379.77 2227.17C1382.93 2226.54 1385.46 2225.91 1388.62 2225.28C1393.04 2224.64 1397.47 2223.38 1401.89 2222.75C1405.68 2221.49 1409.48 2220.85 1413.27 2219.59C1476.48 2204.42 1537.79 2183.56 1596.57 2158.91C1496.07 2296.07 1361.44 2406.68 1204.05 2479.37C1276.74 2474.31 1349.43 2462.3 1419.59 2442.08C1674.31 2366.86 1888.59 2195.57 2016.9 1964.86C1990.98 2110.87 1932.83 2249.93 1846.87 2371.28C1908.18 2330.83 1964.43 2284.06 2015.63 2230.96C2157.21 2083.06 2250.13 1895.34 2281.73 1693.71C2303.22 1793.57 2309.54 1896.6 2300.06 1998.36C2756.42 1361.87 2337.99 701.99 2162.9 528.171C2162.27 526.908 2161.64 526.275 2161.64 525.011C2161.01 525.644 2161.01 525.644 2161.01 526.274C2161.01 525.641 2161.01 525.641 2160.37 525.011C2160.37 532.596 2159.74 540.18 2159.11 547.765C2157.21 562.303 2155.32 576.208 2152.79 590.114C2149.63 604.02 2145.84 617.925 2142.04 631.831C2137.62 645.104 2132.56 659.009 2126.87 672.283C2121.19 684.924 2114.87 698.198 2107.91 710.839C2100.96 722.849 2093.38 735.49 2085.16 746.867C2076.94 758.877 2068.09 770.254 2059.24 780.999C2049.76 792.376 2039.65 802.489 2029.54 812.602C2023.22 818.291 2017.53 823.348 2011.21 828.404C2006.15 832.829 2001.73 836.621 1996.67 841.045C1985.29 849.894 1973.91 858.111 1961.27 865.696C1949.26 873.281 1936.62 880.866 1923.98 887.187C1910.71 893.507 1897.43 899.196 1884.16 904.884C1870.89 909.941 1856.98 914.365 1843.08 918.158C1829.17 921.95 1814.63 925.111 1800.73 927.639C1786.19 930.168 1771.65 931.431 1757.75 932.695C1747.63 933.328 1737.52 933.959 1727.41 933.959C1712.87 933.959 1698.33 932.695 1684.43 931.43C1669.89 930.166 1655.35 928.269 1641.45 925.109C1626.91 922.579 1613 918.788 1599.1 914.364H1598.46C1612.37 913.1 1626.28 911.834 1640.18 909.307C1654.72 906.777 1668.62 903.618 1682.53 899.826C1696.43 896.033 1710.34 891.609 1723.61 886.552C1737.52 881.496 1750.79 875.175 1763.43 868.854C1776.71 862.533 1788.72 855.581 1801.36 847.996C1813.37 839.779 1825.38 831.562 1836.75 822.713C1848.13 813.864 1858.88 804.383 1868.99 794.27C1879.74 784.789 1889.22 774.044 1898.7 763.299C1908.18 751.922 1917.03 740.544 1925.24 729.167C1926.51 727.271 1927.77 724.743 1929.04 722.846C1935.36 712.733 1941.68 702.62 1947.37 692.507C1954.32 679.866 1960.64 667.224 1966.33 653.951C1972.02 640.677 1977.07 627.404 1981.5 613.499C1985.92 600.225 1989.08 586.32 1992.24 572.414C1994.77 557.876 1997.3 543.971 1998.56 530.065C1999.83 515.528 2001.09 500.99 2001.09 487.085C2001.09 476.972 2000.46 466.859 1999.83 456.746C1998.57 442.208 1996.67 428.302 1994.77 414.397C1992.24 399.859 1989.09 385.954 1985.29 372.048C1980.87 358.775 1976.44 344.869 1971.39 331.596C1966.33 318.322 1960.01 305.049 1953.69 292.407C1946.74 279.766 1939.78 267.125 1932.2 255.116C1923.98 243.106 1915.76 231.729 1906.92 220.352C1897.44 209.606 1887.95 198.861 1877.84 188.116C1872.78 183.06 1867.1 177.371 1861.41 172.315C1832.96 150.192 1803.26 129.334 1773.55 110.372C1769.12 107.843 1765.33 105.947 1760.91 104.051C1740.05 90.7776 1720.45 83.8211 1700.86 77.5006Z"
        fill={color}
      />
    </svg>
  );
};
export default NestSVG;
