import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const InputBase = React.forwardRef(({ className, rootClassName, type, label, labelClassName, error, id, ...props }, ref) => {
  return (
    <fieldset className={cn(rootClassName, 'flex flex-col')}>
      {!!label && (
        <Label className={cn('mb-2 text-left', labelClassName)} htmlFor={id}>
          {label}
        </Label>
      )}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        id={id}
        ref={ref}
        {...props}
      />
      {!!error && <p className='text-right text-xs text-red-600 font-normal'>{error}</p>}
    </fieldset>
  );
});
InputBase.displayName = 'Input';

export { InputBase };
