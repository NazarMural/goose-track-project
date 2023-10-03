import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistAuthReducer } from './auth/authSlice';
import { reviewReducer } from './reviews/reviewSlice';
import { persistThemeReducer } from './theme/themeSlice';
import { tasksReducer } from './tasks/tasksSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    reviews: reviewReducer,
    tasks: tasksReducer,
    theme: persistThemeReducer,
  },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
