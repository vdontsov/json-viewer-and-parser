import { ChangeEvent } from 'react';

interface BooleanFieldProps {
  id: string;
  name: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function BooleanField({ id, name, value, onChange }: BooleanFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === 'true');
  };

  return (
    <div>
      <label htmlFor={`${id}-${name}-true`}>
        <input
          id={`${id}-${name}-true`}
          type="radio"
          name={`${id}-${name}`}
          value="true"
          checked={value === true}
          onChange={handleChange}
        />
        True
      </label>
      <label htmlFor={`${id}-${name}-false`}>
        <input
          id={`${id}-${name}-false`}
          type="radio"
          name={`${id}-${name}`}
          value="false"
          checked={value === false}
          onChange={handleChange}
        />
        False
      </label>
    </div>
  );
}
