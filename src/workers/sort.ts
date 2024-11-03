import { WorkerSortMessage } from '../types';

const workerFunction = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (event: MessageEvent<WorkerSortMessage>) => {
    const { data, field, direction } = event.data;

    const sortedData = data.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue === undefined && bValue === undefined) return 0;
      if (aValue === undefined) return direction === 'asc' ? 1 : -1;
      if (bValue === undefined) return direction === 'asc' ? -1 : 1;

      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return direction === 'asc' ? 1 : -1;
      if (bValue === null) return direction === 'asc' ? -1 : 1;

      if (
        typeof aValue === 'object' &&
        aValue !== null &&
        typeof bValue === 'object' &&
        bValue !== null
      ) {
        const stringA = JSON.stringify(aValue);
        const stringB = JSON.stringify(bValue);

        if (stringA < stringB) return direction === 'asc' ? -1 : 1;
        if (stringA > stringB) return direction === 'asc' ? 1 : -1;

        return 0;
      }

      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;

      return 0;
    });

    postMessage(sortedData);
  };
};

const codeToString = workerFunction.toString();

const mainCode = codeToString.substring(
  codeToString.indexOf('{') + 1,
  codeToString.lastIndexOf('}')
);

const blob = new Blob([mainCode], { type: 'application/javascript' });

export const workerScript = URL.createObjectURL(blob);
