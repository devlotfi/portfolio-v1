import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import LogoSVG from '../svg/logo.component';
import LoadingIndicator from '../loading-indicator/loading-indicator.component';

const variants = cva('flex w-full h-full justify-center items-center');

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  loading: boolean;
}

export default function PageLoading({
  className,
  loading,
  children,
  ...props
}: Props) {
  if (loading) {
    return (
      <div className={cn(variants({ className }))} {...props}>
        <div className="flex flex-col space-y-5">
          <LogoSVG className="w-[7rem]" color="var(--edge-100)"></LogoSVG>
          <LoadingIndicator
            dotProps={{ className: 'bg-edge-100 h-[1rem] w-[1rem]' }}
          ></LoadingIndicator>
        </div>
      </div>
    );
  }

  return children;
}
