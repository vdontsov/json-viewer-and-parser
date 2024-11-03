import { useState } from 'react';
import styles from './Field.module.css';
import { useAppDispatch } from '../../hooks/store';
import { updateItem } from '../../store/slices/dataSlice';
import { ID_FIELD } from '../../constants';
import { FieldType } from '../../types';
import { BooleanField } from '../BooleanField/BooleanField';
import { DateField } from '../DateField/DateField';
import { EmailField } from '../EmailField/EmailField';
import { NumberField } from '../NumberField/NumberField';
import { TextAreaField } from '../TextAreaField/TextAreaField';
import { TextField } from '../TextField/TextField';
import { assertUnreachable } from '../../utils/common';
import { getFieldType, isEditableField } from '../../utils/field';

interface FieldProps {
  id: string;
  name: string;
  value: unknown;
}

export function Field({ id, name, value }: FieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const dispatch = useAppDispatch();
  const isEditable = isEditableField(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(
      updateItem({
        [ID_FIELD]: id,
        changes: { [name]: editValue },
      })
    );
    setIsEditing(false);
  };

  const fieldType = getFieldType(value);

  const renderEditableField = () => {
    switch (fieldType) {
      case FieldType.DATE:
        return (
          <DateField value={editValue as string} onChange={setEditValue} />
        );
      case FieldType.EMAIL:
        return (
          <EmailField value={editValue as string} onChange={setEditValue} />
        );
      case FieldType.LONG_TEXT:
        return (
          <TextAreaField value={editValue as string} onChange={setEditValue} />
        );
      case FieldType.TEXT:
        return (
          <TextField value={editValue as string} onChange={setEditValue} />
        );
      case FieldType.NUMBER:
        return (
          <NumberField value={editValue as number} onChange={setEditValue} />
        );
      case FieldType.BOOLEAN:
        return (
          <BooleanField
            id={id}
            name={name}
            value={editValue as boolean}
            onChange={setEditValue}
          />
        );
      case FieldType.OBJECT:
        return <span>Complex JSON - Edit not supported</span>;
      case FieldType.UNSUPPORTED:
        return <span>Unsupported type</span>;

      default:
        return assertUnreachable(
          fieldType,
          `Unsupported field type - ${fieldType}`
        );
    }
  };

  if (isEditable && isEditing) {
    return (
      <div className={styles.wrapper}>
        {renderEditableField()}
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <span>{String(value)}</span>
      {isEditable && (
        <button type="button" onClick={handleEditClick}>
          <span role="img" aria-label="Edit">
            Edit ✏️
          </span>
        </button>
      )}
    </div>
  );
}
