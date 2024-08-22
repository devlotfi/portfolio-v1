import { BaseHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface Props extends BaseHTMLAttributes<HTMLDivElement> {}

export default function ExperienceCard({
  className,
  children,
  ...props
}: Props) {
  return (
    <div className={cn('flex space-x-3', className)} {...props}>
      <div className="flex flex-col min-h-full items-center">
        <div className="flex w-[0.2rem] h-full bg-edge-100"></div>
        <div className="flex min-h-[1rem] min-w-[1rem] bg-primary-100"></div>
        <div className="flex w-[0.2rem] h-full bg-edge-100"></div>
      </div>

      {children}
    </div>
  );
}
