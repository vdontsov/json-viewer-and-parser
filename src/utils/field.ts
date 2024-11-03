import { NON_EDITABLE_FIELDS } from '../constants';
import { FieldType } from '../types';

export const isEditableField = (fieldName: string) => {
  return !NON_EDITABLE_FIELDS.includes(fieldName);
};

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

const isDateString = (value: unknown): value is string => {
  if (typeof value !== 'string') {
    return false;
  }

  // Remove space before TZ, if it exists
  const formattedValue = value.replace(/\s([-+]\d{2}:\d{2})$/, '$1');

  // Checking if we can parse it as a date
  return !isNaN(Date.parse(formattedValue));
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

const isLongString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 100;

const isEmail = (value: unknown): value is string =>
  typeof value === 'string' && /\S+@\S+\.\S+/.test(value);

export const getFieldType = (value: unknown): FieldType => {
  if (isDateString(value)) return FieldType.DATE;
  if (isEmail(value)) return FieldType.EMAIL;
  if (isLongString(value)) return FieldType.LONG_TEXT;
  if (isString(value)) return FieldType.TEXT;
  if (isNumber(value)) return FieldType.NUMBER;
  if (isBoolean(value)) return FieldType.BOOLEAN;
  if (isObject(value)) return FieldType.OBJECT;

  return FieldType.UNSUPPORTED;
};
