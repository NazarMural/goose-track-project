import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    userAvatar: null,
    phone: null,
    skype: null,
    birthday: null,
    role: null, // ?
  },
  token: null,
  isLoggedIn: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build => build.addCase('', (state, { payload }) => {}),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
