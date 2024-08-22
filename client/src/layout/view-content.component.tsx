import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

const variants = cva(
  'flex flex-col h-screen w-screen pl-0 pt-[3.8rem] lg:pt-0 lg:pl-[5rem] overflow-y-auto overflow-x-hidden z-10',
);

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  reactRef?: React.RefObject<HTMLDivElement>;
}

const ViewContent = ({
  className,
  children,
  reactRef,
  ...props
}: Props): JSX.Element => {
  return (
    <div ref={reactRef} className={cn(variants({ className }))} {...props}>
      {children}
    </div>
  );
};
export default ViewContent;
