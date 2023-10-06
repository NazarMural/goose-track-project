import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { handleSetTheme } from 'utils/reduxActionHandlers/themeActionHandlers';
import { THEMES } from 'constants/theme/themes';
import storage from 'redux-persist/lib/storage';

const initialState = {
  theme: THEMES.LIGHT,
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
    setTheme: handleSetTheme,
  },
});

export const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export const persistThemeReducer = persistReducer(themePersistConfig, themeReducer);
