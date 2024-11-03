import { ChangeEvent } from 'react';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextField({ value, onChange }: TextFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
