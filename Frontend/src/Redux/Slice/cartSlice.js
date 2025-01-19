import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [], // Load cart from localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Save to localStorage
    },
    increaseQuantity: (state, action) =>{
      const item = state.items.find(item => item._id === action.payload._id)
      if(item){
        item.quantity +=1
      }
    },
    DecreaseQuantity: (state, action) =>{
      const item = state.items.find(item => item._id === action.payload._id)
      if(item && item.quantity > 1){
        item.quantity -=1
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems'); // Clear from localStorage
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, increaseQuantity, DecreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
