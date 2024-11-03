import { ChangeEvent } from 'react';

interface DateFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function DateField({ value, onChange }: DateFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input type="date" value={value.split('T')[0]} onChange={handleChange} />
  );
}
