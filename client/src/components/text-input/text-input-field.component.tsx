import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const variants = cva(
  'flex flex-1 bg-transparent min-h-[2.8rem] px-[0.5rem] placeholder-edge-200 outline-none',
  {
    variants: {
      variant: {
        primary: 'border-primary-100 text-primary-100',
        success: 'border-success-100 text-success-100',
        error: 'border-error-100 text-error-100',
        warning: 'border-warning-100 text-warning-100',
        'edge-100': 'border-edge-100 text-edge-100',
      },
    },
    defaultVariants: {
      variant: 'edge-100',
    },
  },
);

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {}

export default function TextInputField({
  variant,
  className,
  ...props
}: Props) {
  return (
    <input className={cn(variants({ variant, className }))} {...props}></input>
  );
}
