import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Sort } from '../Sort/Sort';
import styles from './Toolbar.module.css';
import { SortDirection } from '../../types';
import { sortData } from '../../utils/sort';
import { resetData, updateData } from '../../store/slices/dataSlice';
import { Filter } from '../Filter/Filter';
import { filterData } from '../../utils/filter';
import { ExportButton } from '../ExportButton/ExportButton';

export function Toolbar() {
  const [isSorting, setIsSorting] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const items = useAppSelector((state) => state.items);
  const filteredItems = useAppSelector((state) => state.filteredItems);
  const uniqueFields = useAppSelector((state) => state.uniqueFields);
  const dispatch = useAppDispatch();

  const handleSort = (field: string, direction: SortDirection) => {
    sortData(
      filteredItems,
      field,
      direction,
      (sortedData) => dispatch(updateData(sortedData)),
      () => setIsSorting(true),
      () => setIsSorting(false)
    );
  };

  const handleFilter = (field: string, term: string) => {
    filterData(
      items,
      field,
      term,
      (filteredData) => dispatch(updateData(filteredData)),
      () => setIsFiltering(true),
      () => setIsFiltering(false)
    );
  };

  const handleFilterRest = () => {
    dispatch(resetData());
  };

  return (
    <div className={styles.toolbar}>
      <Sort fields={uniqueFields} onSort={handleSort} isSorting={isSorting} />
      <Filter
        fields={uniqueFields}
        isFiltering={isFiltering}
        onChange={handleFilter}
        onReset={handleFilterRest}
      />
      <ExportButton items={filteredItems} />
    </div>
  );
}
