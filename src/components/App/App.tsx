import { FileUploader } from '../FileUploader/FileUploader';
import { ItemList } from '../ItemsList/ItemsList';
import { Toolbar } from '../Toolbar/Toolbar';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <h1>JSON Viewer and Parser</h1>
      <FileUploader />
      <Toolbar />
      <div className={styles.list}>
        <ItemList />
      </div>
    </div>
  );
}
