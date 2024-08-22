import { VariantProps, cva } from 'class-variance-authority';
import { SVGProps } from 'react';
import { cn } from '../../utils/cn';

const variants = cva('flex');

interface Props extends SVGProps<SVGSVGElement>, VariantProps<typeof variants> {
  fillColor: string;
}

export default function LinkedinSVG({ className, fillColor, ...props }: Props) {
  return (
    <svg
      className={cn(variants({ className }))}
      {...props}
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2318.93 0H188.452C86.5476 0 0 80.5952 0 179.881V2320C0 2419.4 56.7857 2500 158.69 2500H2289.17C2391.19 2500 2500 2419.4 2500 2320V179.881C2500 80.5952 2420.95 0 2318.93 0ZM952.381 952.381H1288.93V1123.93H1292.62C1343.93 1031.43 1495.48 937.5 1682.86 937.5C2042.5 937.5 2142.86 1128.45 2142.86 1482.14V2142.86H1785.71V1547.26C1785.71 1388.93 1722.5 1250 1574.64 1250C1395.12 1250 1309.52 1371.55 1309.52 1571.07V2142.86H952.381V952.381ZM357.143 2142.86H714.286V952.381H357.143V2142.86ZM758.929 535.714C758.942 565.023 753.182 594.047 741.977 621.129C730.772 648.212 714.341 672.821 693.625 693.553C672.908 714.285 648.31 730.733 621.236 741.957C594.162 753.182 565.142 758.963 535.833 758.971C506.525 758.978 477.501 753.213 450.421 742.003C423.341 730.793 398.734 714.358 378.007 693.637C357.279 672.917 340.835 648.316 329.616 621.239C318.397 594.163 312.621 565.142 312.619 535.833C312.614 476.656 336.115 419.901 377.952 378.049C419.789 336.197 476.537 312.677 535.714 312.661C594.891 312.645 651.651 336.135 693.511 377.965C735.371 419.794 758.902 476.537 758.929 535.714Z"
      />
    </svg>
  );
}
