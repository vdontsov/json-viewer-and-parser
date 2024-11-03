import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { DataItem, DataState } from '../../types';
import { ID_FIELD } from '../../constants';

const initialState: DataState = {
  items: [],
  filteredItems: [],
  uniqueFields: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    loadData(state: DataState, action: PayloadAction<DataItem[]>) {
      const uniqueFieldsSet = new Set<string>();

      state.items = action.payload.map((item) => {
        Object.keys(item).forEach((key) => uniqueFieldsSet.add(key));

        return {
          ...item,
          [ID_FIELD]: item[ID_FIELD] || uuidv4(),
        };
      });
      state.filteredItems = [...state.items];
      state.uniqueFields = Array.from(uniqueFieldsSet);
    },
    updateData(state: DataState, action: PayloadAction<DataItem[]>) {
      state.filteredItems = action.payload;
    },
    resetData(state: DataState, _action: PayloadAction<void>) {
      state.filteredItems = [...state.items];
    },
    updateItem(
      state: DataState,
      action: PayloadAction<{ [ID_FIELD]: string; changes: Partial<DataItem> }>
    ) {
      const updateItem = (items: DataItem[]) => {
        for (let i = 0; i < items.length; i += 1) {
          if (items[i][ID_FIELD] === action.payload[ID_FIELD]) {
            items[i] = { ...items[i], ...action.payload.changes };
            break;
          }
        }
      };

      updateItem(state.items);
      updateItem(state.filteredItems);
    },
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const { loadData, updateData, resetData, updateItem } =
  dataSlice.actions;
