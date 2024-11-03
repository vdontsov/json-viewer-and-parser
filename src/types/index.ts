import { ID_FIELD } from '../constants';

export interface DataItem {
  [ID_FIELD]: string;
  [key: string]: unknown;
}

export interface DataState {
  items: DataItem[];
  filteredItems: DataItem[];
  uniqueFields: string[];
}

export enum FieldType {
  DATE = 'date',
  EMAIL = 'email',
  LONG_TEXT = 'long-text',
  TEXT = 'text',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  UNSUPPORTED = 'unsupported',
}

export type SortDirection = 'asc' | 'desc';

export interface WorkerSortMessage {
  field: string;
  data: DataItem[];
  direction: SortDirection;
}

export interface WorkerFilterMessage {
  field: string;
  data: DataItem[];
  term: string;
}
