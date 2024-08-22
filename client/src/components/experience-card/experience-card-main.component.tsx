import { BaseHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  date: string;
}

export default function ExperienceCardMain({
  className,
  date,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-start my-[3.8rem] space-y-3',
        className,
      )}
      {...props}
    >
      <div className="flex bg-edge-100 text-base-100 p-[0.5rem]">{date}</div>

      <div className="flex flex-col border border-edge-100">
        <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 bg-base-100 p-[1rem] border border-edge-100 translate-x-[0.3rem] translate-y-[-0.3rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
