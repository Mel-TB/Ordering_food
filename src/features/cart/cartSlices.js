import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

const getCartItems = (state) => state.cart.cart;

export const getCart = createSelector([getCartItems], (cart) => cart);

export const getTotalCartQuantity = createSelector(
  [getCartItems],
  (cartItems) =>
    cartItems.reduce((sumQuantity, item) => sumQuantity + item.quantity, 0),
);

export const getTotalCartPrice = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((sumPrice, item) => sumPrice + item.totalPrice, 0),
);

export const getCurrentQuantityById = (id) =>
  createSelector(
    [getCartItems],
    (cartItems) => cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
