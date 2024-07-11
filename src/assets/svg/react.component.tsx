import { VariantProps, cva } from "class-variance-authority";
import { SVGProps } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex");

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  color: string;
}

const ReactSVG = ({ className, color, ...props }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 2808 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(variants({ className }))}
      {...props}
    >
      <path
        d="M2807.23 1250.29C2807.23 1064.32 2574.34 888.075 2217.29 778.782C2299.68 414.855 2263.06 125.315 2101.7 32.6161C2064.51 10.872 2021.02 0.572205 1973.53 0.572205V128.176C1999.85 128.176 2021.02 133.326 2038.76 143.053C2116.58 187.686 2150.34 357.633 2124.02 576.219C2117.72 630.007 2107.42 686.656 2094.84 744.45C1982.68 716.983 1860.23 695.811 1731.49 682.078C1654.24 576.219 1574.13 480.087 1493.45 395.972C1679.99 222.591 1855.08 127.604 1974.1 127.604V0C1816.74 0 1610.75 112.154 1402.47 306.706C1194.19 113.298 988.195 2.28886 830.839 2.28886V129.892C949.285 129.892 1124.95 224.308 1311.49 396.544C1231.38 480.659 1151.27 576.219 1075.17 682.078C945.852 695.811 823.4 716.983 711.248 745.022C698.088 687.8 688.36 632.296 681.494 579.08C654.6 360.494 687.788 190.547 765.035 145.342C782.201 135.042 804.517 130.465 830.839 130.465V2.86107C782.774 2.86107 739.286 13.1609 701.521 34.905C540.732 127.604 504.683 416.571 587.652 779.354C231.742 889.219 0 1064.89 0 1250.29C0 1436.26 232.887 1612.5 589.941 1721.79C507.544 2085.72 544.165 2375.26 705.526 2467.96C742.72 2489.7 786.207 2500 834.272 2500C991.628 2500 1197.62 2387.85 1405.9 2193.29C1614.18 2386.7 1820.18 2497.71 1977.53 2497.71C2025.6 2497.71 2069.09 2487.41 2106.85 2465.67C2267.64 2372.97 2303.69 2084 2220.72 1721.22C2575.49 1611.92 2807.23 1435.68 2807.23 1250.29ZM2062.22 868.62C2041.05 942.435 2014.73 1018.54 1984.97 1094.64C1961.51 1048.87 1936.91 1003.09 1910.01 957.313C1883.69 911.536 1855.65 866.903 1827.62 823.415C1908.87 835.431 1987.26 850.309 2062.22 868.62ZM1800.15 1478.03C1755.52 1555.28 1709.74 1628.52 1662.25 1696.61C1576.99 1704.05 1490.59 1708.06 1403.61 1708.06C1317.21 1708.06 1230.81 1704.05 1146.12 1697.18C1098.63 1629.09 1052.28 1556.42 1007.65 1479.74C964.162 1404.78 924.68 1328.68 888.631 1252C924.108 1175.33 964.162 1098.65 1007.08 1023.69C1051.71 946.441 1097.49 873.197 1144.98 805.104C1230.24 797.665 1316.64 793.66 1403.61 793.66C1490.02 793.66 1576.42 797.665 1661.11 804.532C1708.6 872.625 1754.95 945.296 1799.58 1021.97C1843.07 1096.93 1882.55 1173.04 1918.6 1249.71C1882.55 1326.39 1843.07 1403.07 1800.15 1478.03ZM1984.97 1403.64C2015.87 1480.32 2042.19 1556.99 2063.94 1631.38C1988.98 1649.69 1910.01 1665.14 1828.19 1677.16C1856.23 1633.1 1884.26 1587.89 1910.59 1541.54C1936.91 1495.77 1961.51 1449.42 1984.97 1403.64ZM1404.76 2014.19C1351.54 1959.26 1298.33 1898.03 1245.69 1831.08C1297.18 1833.37 1349.83 1835.09 1403.04 1835.09C1456.83 1835.09 1510.04 1833.94 1562.11 1831.08C1510.62 1898.03 1457.4 1959.26 1404.76 2014.19ZM979.039 1677.16C897.786 1665.14 819.395 1650.26 744.436 1631.95C765.608 1558.14 791.929 1482.03 821.683 1405.93C845.144 1451.71 869.749 1497.48 896.642 1543.26C923.536 1589.04 951.001 1633.67 979.039 1677.16ZM1401.9 486.381C1455.11 541.314 1508.33 602.541 1560.97 669.49C1509.47 667.201 1456.83 665.484 1403.61 665.484C1349.83 665.484 1296.61 666.628 1244.54 669.49C1296.04 602.541 1349.25 541.314 1401.9 486.381ZM978.467 823.415C950.429 867.475 922.391 912.68 896.07 959.029C869.749 1004.81 845.144 1050.58 821.683 1096.36C790.785 1019.68 764.463 943.008 742.72 868.62C817.678 850.881 896.642 835.431 978.467 823.415ZM460.624 1539.83C258.064 1453.42 127.029 1340.12 127.029 1250.29C127.029 1160.45 258.064 1046.58 460.624 960.746C509.833 939.574 563.62 920.691 619.124 902.953C651.739 1015.11 694.654 1131.84 747.869 1251.43C695.227 1370.45 652.884 1486.61 620.84 1598.19C564.192 1580.45 510.405 1561 460.624 1539.83ZM768.469 2357.52C690.649 2312.89 656.889 2142.94 683.21 1924.35C689.505 1870.57 699.804 1813.92 712.393 1756.12C824.545 1783.59 946.996 1804.76 1075.74 1818.49C1152.99 1924.35 1233.1 2020.48 1313.78 2104.6C1127.24 2277.98 952.146 2372.97 833.128 2372.97C807.378 2372.4 785.635 2367.25 768.469 2357.52ZM2125.73 1921.49C2152.63 2140.08 2119.44 2310.02 2042.19 2355.23C2025.03 2365.53 2002.71 2370.11 1976.39 2370.11C1857.94 2370.11 1682.28 2275.69 1495.74 2103.46C1575.85 2019.34 1655.96 1923.78 1732.06 1817.92C1861.38 1804.19 1983.83 1783.02 2095.98 1754.98C2109.14 1812.77 2119.44 1868.28 2125.73 1921.49ZM2346.03 1539.83C2296.82 1561 2243.04 1579.88 2187.53 1597.62C2154.92 1485.47 2112 1368.73 2058.79 1249.14C2111.43 1130.12 2153.77 1013.96 2185.82 902.38C2242.46 920.119 2296.25 939.574 2346.6 960.746C2549.16 1047.15 2680.2 1160.45 2680.2 1250.29C2679.63 1340.12 2548.59 1453.99 2346.03 1539.83Z"
        fill={color}
      />
      <path
        d="M1403.04 1511.79C1547.46 1511.79 1664.54 1394.71 1664.54 1250.29C1664.54 1105.86 1547.46 988.784 1403.04 988.784C1258.62 988.784 1141.54 1105.86 1141.54 1250.29C1141.54 1394.71 1258.62 1511.79 1403.04 1511.79Z"
        fill={color}
      />
    </svg>
  );
};
export default ReactSVG;
