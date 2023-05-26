import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import deliverySlice from './delivery/deliverySlice';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    delivery: deliverySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});