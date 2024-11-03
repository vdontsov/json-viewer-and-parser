import { DataItem, SortDirection } from '../types';
import { workerScript } from '../workers/sort';

export const sortData = (
  data: DataItem[],
  field: string,
  direction: SortDirection,
  onSorted: (sortedData: DataItem[]) => void,
  onSortingStart: () => void,
  onSortingEnd: () => void
) => {
  if (window.Worker) {
    onSortingStart();

    const worker = new Worker(workerScript);

    worker.postMessage({ data, field, direction });

    worker.onmessage = (e) => {
      onSorted(e.data);
      onSortingEnd();
      worker.terminate();
    };

    worker.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Error occurred in Web Worker');
      worker.terminate();
      onSortingEnd();
    };
  } else {
    // eslint-disable-next-line no-console
    console.warn('Web Workers are not supported in this browser.');
  }
};
