import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const InputBase = React.forwardRef(({ className, rootClassName, type, label, labelClassName, error, id, ...props }, ref) => {
  return (
    <fieldset className={cn(rootClassName)}>
      {!!label && (
        <Label className={cn('mb-4 text-left', labelClassName)} htmlFor={id}>
          {label}
        </Label>
      )}
      <Popover>
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
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {!!error && <p className='text-right text-xs text-red-600 font-normal'>{error}</p>}
    </fieldset>
  );
});
InputBase.displayName = 'Input';

export { InputBase };