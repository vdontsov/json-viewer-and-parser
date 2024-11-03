import { ChangeEvent } from 'react';

interface NumberFieldProps {
  value: number;
  onChange: (value: number) => void;
}

export function NumberField({ value, onChange }: NumberFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return <input type="number" value={value} onChange={handleChange} />;
}
