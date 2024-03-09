import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQuantity: 0,
  totalAmt: 0,
};

const cartSlice = createSlice({
  name: "usercart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cart.push(temp);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const nextCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = nextCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    quantityDec: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
      } else if (state.cart[find].quantity === 1) {
        const nextCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = nextCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    quantityInc: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart[find].quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    getTotal: (state, action) => {
      let { total, quan } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quan += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quan: 0,
        }
      );

      state.cartQuantity = quan;
      state.totalAmt = total;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, quantityDec, quantityInc, getTotal } =
  cartSlice.actions;
