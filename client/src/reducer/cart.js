import {
  ADD_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_FROM_CART,
  POST_HISTORY,
  GET_HISTORY,
} from "../actions/types";
import { removeFromCart, addToCart } from "../Utils/cart";
const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  history: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: addToCart(state.cartItems, payload),
        totalQuantity: state.totalQuantity + 1,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, payload),
        totalQuantity: state.totalQuantity - 1,
      };
    }
    case CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== payload
        ),
        totalQuantity:
          state.totalQuantity -
          state.cartItems.filter((cartItem) => cartItem._id === payload)[0]
            .quantity,
      };
    }
    case POST_HISTORY: {
      return {
        ...state,
        history: payload,
      };
    }
    case GET_HISTORY: {
      return {
        ...state,
        history: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
