import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default is localStorage
import productsReducer from './Slice/productSlice';
import authReducer from './Slice/authSlice';
import cartReducer from './Slice/cartSlice';

const persistConfig = {
  key: 'cart', // Key to store the cart state
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: persistedCartReducer, // Use persisted reducer for the cart
  },
});

export const persistor = persistStore(store); // Persistor to control persistence
export default store;
