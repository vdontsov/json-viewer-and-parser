import { ChangeEvent } from 'react';

interface SelectorProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}
export function Selector({ label, value, options, onChange }: SelectorProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} value={value}>
      <option value="" disabled>
        {label}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
