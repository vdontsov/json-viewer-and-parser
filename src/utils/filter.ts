import { DataItem } from '../types';
import { workerScript } from '../workers/filter';

export const filterData = (
  data: DataItem[],
  field: string,
  term: string,
  onFiltered: (filteredData: DataItem[]) => void,
  onFilteringStart: () => void,
  onFilteringEnd: () => void
) => {
  if (window.Worker) {
    onFilteringStart();

    const worker = new Worker(workerScript);

    worker.postMessage({ data, field, term });

    worker.onmessage = (e) => {
      onFiltered(e.data);
      onFilteringEnd();
      worker.terminate();
    };

    worker.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Error occurred in Web Worker');
      worker.terminate();
      onFilteringEnd();
    };
  } else {
    // eslint-disable-next-line no-console
    console.warn('Web Workers are not supported in this browser.');
  }
};
