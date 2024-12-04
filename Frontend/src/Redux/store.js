import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slice/productSlice';
import authReducer from './Slice/authSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;
