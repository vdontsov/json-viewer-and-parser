import { useState } from 'react';
import styles from './Sort.module.css';
import { SortDirection } from '../../types';
import { Selector } from '../Selector/Selector';

interface SortProps {
  fields: string[];
  isSorting: boolean;
  onSort: (field: string, direction: SortDirection) => void;
}

export function Sort({ fields, isSorting, onSort }: SortProps) {
  const [selectedField, setSelectedField] = useState<string>('');
  const [direction, setDirection] = useState<SortDirection>('asc');

  const handleDirectionChange = () => {
    setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleSort = () => {
    if (selectedField) onSort(selectedField, direction);
  };

  return (
    <div className={styles.sort}>
      <Selector
        label="Select field to sort by"
        value={selectedField}
        options={fields}
        onChange={setSelectedField}
      />
      <button type="button" onClick={handleDirectionChange}>
        {direction === 'asc' ? 'Ascending' : 'Descending'}
      </button>
      <button
        type="button"
        onClick={handleSort}
        disabled={!selectedField || isSorting}
      >
        {isSorting ? 'Sorting...' : 'Sort'}
      </button>
    </div>
  );
}
