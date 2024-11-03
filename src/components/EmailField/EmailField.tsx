import { ChangeEvent } from 'react';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailField({ value, onChange }: EmailFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input type="email" value={value} onChange={handleChange} />;
}
