import { WorkerFilterMessage } from '../types';

const workerFunction = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (event: MessageEvent<WorkerFilterMessage>) => {
    const { data, field, term } = event.data;

    const filteredData = data.filter((item) => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(term.toLowerCase());
      }
      if (typeof value === 'number') {
        return value.toString().includes(term);
      }
      return false;
    });

    postMessage(filteredData);
  };
};

const codeToString = workerFunction.toString();

const mainCode = codeToString.substring(
  codeToString.indexOf('{') + 1,
  codeToString.lastIndexOf('}')
);

const blob = new Blob([mainCode], { type: 'application/javascript' });

export const workerScript = URL.createObjectURL(blob);
