import { ChangeEvent } from 'react';

interface TextAreaFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextAreaField({ value, onChange }: TextAreaFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return <textarea value={value} onChange={handleChange} />;
}
