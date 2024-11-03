import { ID_FIELD } from '../../constants';
import { DataItem } from '../../types';
import { Field } from '../Field/Field';
import styles from './ListItem.module.css';

interface ListItemProps {
  item: DataItem;
}

export function ListItem({ item }: ListItemProps) {
  return (
    <div className={styles.wrapper}>
      {Object.entries(item).map(([key, value]) => (
        <div key={key} className={styles.item}>
          <strong>{key}:</strong>
          <Field id={item[ID_FIELD]} name={key} value={value} />
        </div>
      ))}
    </div>
  );
}
