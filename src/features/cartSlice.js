
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("added quantity", {
          position: "bottom-left",
          autoClose: 1000
        })

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("added product to cart", {
          position: "bottom-left"
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )
      state.cartItems = nextCartItems;

      toast.error("removed product from cart", {
        position: "bottom-left"
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action) {
      const ItemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.id
      )
      if (state.cartItems[ItemIndex].cartQuantity > 1) {
        state.cartItems[ItemIndex].cartQuantity -= 1

        toast.error("decreased product qty from cart", {
          position: "bottom-left"
        });
      } else if (state.cartItems[ItemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
        state.cartItems = nextCartItems;

        toast.error("removed product from cart", {
          position: "bottom-left"
        });

      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    clearCart(state, action) {
      state.cartItems = [];

      toast.error("cleared cart", {
        position: "bottom-left"
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    getTotals(state, action) {
     let{total, quantity}= state.cartItems.reduce(
        (cartTotal, cartItem) => {
        const{ price, cartQuantity } = cartItem;
        const itemTotal = price*cartQuantity;

        cartTotal.total +=itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal;
      }, {
        total: 0,
        quantity: 0
      }
      );
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
    },

  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;