import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface MaskedInputProps {
  name: string;
  type?: string;
  mask?: (value: string) => string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  value?: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ name, type = 'text', mask = (value) => value, placeholder = "", maxLength = undefined, readOnly = false, value = "" }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            name={name}
            ref={ref}
            value={mask(value)}
            onChange={(e) => onChange(mask(e.target.value))}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
            maxLength={maxLength}
            readOnly={readOnly}
            className={`pl-1 mt-1 block w-full border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
        )}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message as string}</p>}
    </div>
  );
};

export default MaskedInput;
