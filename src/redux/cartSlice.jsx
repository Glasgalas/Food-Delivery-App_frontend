import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const indxExist = state.cartItems.findIndex(
        cartItem => cartItem._id === action.payload._id,
      );

      if (indxExist !== -1) {
        state.cartItems[indxExist] = {
          ...state.cartItems[indxExist],
          cartQuantity: state.cartItems[indxExist].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decrementCart(state, action) {
      const itemIndx = state.cartItems.findIndex(
        cartItem => cartItem._id === action.payload._id,
      );

      if (state.cartItems[itemIndx].cartQuantity > 1) {
        state.cartItems[itemIndx].cartQuantity -= 1;
      } else if (state.cartItems[itemIndx].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem._id !== action.payload._id,
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    deleteFromCart(state, action) {
      state.cartItems.map(cartItem => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            item => item._id !== cartItem._id,
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decrementCart,
  deleteFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;
