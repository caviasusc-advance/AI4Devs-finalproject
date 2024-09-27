import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"
import { SelectBase, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./baseSelect"
import { Label } from '@/components/ui/label';
import clsx from "clsx";

const getName = (value, data)=>{
  if(!data) return ''
  const name = data.find(el=>el.value == value)

  return name?.name || ''
}

const Select = ({ data, value, label, labelClassName, className, inputClassName, placeholder, id, error, ...props }) => {
  return (
  <fieldset className={cn(className, 'flex flex-col')}>
    {!!label && (
        <Label className={cn('mb-2 text-left', labelClassName)} htmlFor={id}>
          {label}
        </Label>
      )}
    <SelectBase defaultValue={value} { ...props} >
        <SelectTrigger className={clsx(inputClassName, "w-full")}>
          <SelectValue  aria-label={value} placeholder={placeholder} >
              {getName(value, data)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          { !!data && data.map(el=>(
            <SelectItem value={el.value}>{el.name}</SelectItem>

          ))}
        </SelectContent>
      </SelectBase>
      {!!error && <p id={id + '-error'} className='text-right text-xs text-red-600 font-normal'>{error}</p>}
  </fieldset>
)}

export { Select }