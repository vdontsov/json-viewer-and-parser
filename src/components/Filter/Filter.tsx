import React, { useState } from 'react';
import { Selector } from '../Selector/Selector';
import styles from './Filter.module.css';

interface FilterProps {
  fields: string[];
  isFiltering: boolean;
  onChange: (field: string, searchTerm: string) => void;
  onReset: () => void;
}

export function Filter({
  fields,
  isFiltering,
  onChange,
  onReset,
}: FilterProps) {
  const [selectedField, setSelectedField] = useState<string>('');
  const [term, setTerm] = useState<string>('');

  const disabled = !selectedField || !term || isFiltering;

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setTerm(event.target.value);
    if (!value) onReset();
  };

  const handleFilter = () => {
    if (selectedField && term.trim() !== '') {
      onChange(selectedField, term);
    }
  };

  return (
    <div className={styles.filter}>
      <Selector
        label="Select field to filter by"
        value={selectedField}
        options={fields}
        onChange={setSelectedField}
      />
      <input
        type="text"
        placeholder="Search term"
        value={term}
        onChange={handleSearchTermChange}
      />
      <button type="button" onClick={handleFilter} disabled={disabled}>
        {isFiltering ? 'Filtering...' : 'Filter'}
      </button>
    </div>
  );
}
