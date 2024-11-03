import { useAppSelector } from '../../hooks/store';
import { ListItem } from '../ListItem/ListItem';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
} from 'react-virtualized';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

export function ItemList() {
  const filteredItems = useAppSelector((state) => state.filteredItems);

  const rowRenderer = ({ index, key, parent, style }: ListRowProps) => (
    <CellMeasurer
      key={key}
      cache={cache}
      columnIndex={0}
      parent={parent}
      rowIndex={index}
    >
      <div style={style}>
        <ListItem item={filteredItems[index]} />
      </div>
    </CellMeasurer>
  );

  if (filteredItems.length === 0) {
    return <p>No items to display. Please upload a JSON file.</p>;
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemCount={filteredItems.length}
          rowCount={filteredItems.length}
          rowHeight={cache.rowHeight}
          rowRenderer={rowRenderer}
          deferredMeasurementCache={cache}
        />
      )}
    </AutoSizer>
  );
}
