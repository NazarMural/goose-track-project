import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  theme: 'light',
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, { payload }) => (state.theme = payload),
  },
});

export const { toggleTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export const persistThemeReducer = persistReducer(
  themePersistConfig,
  themeReducer
);
