import './loading-indicator.css';
import { VariantProps, cva } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const variants = cva('spinner');

const dotVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-primary-100',
      success: 'bg-success-100',
      error: 'bg-error-100',
      warning: 'bg-warning-100',
      'edge-100': 'bg-edge-100',
      'base-100': 'bg-base-100',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface Props
  extends BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  dotProps?: BaseHTMLAttributes<HTMLDivElement> &
    VariantProps<typeof dotVariants>;
}

const LoadingIndicator = ({
  className,
  dotProps,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={cn(variants({ className }))} {...props}>
      <div
        {...dotProps}
        className={cn(
          'bounce1',
          dotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
      ></div>
      <div
        {...dotProps}
        className={cn(
          'bounce2',
          dotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
      ></div>
      <div
        {...dotProps}
        className={cn(
          'bounce3',
          dotVariants({
            className: dotProps ? dotProps.className : undefined,
            variant: dotProps ? dotProps.variant : undefined,
          }),
        )}
      ></div>
    </div>
  );
};
export default LoadingIndicator;
