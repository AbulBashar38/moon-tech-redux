import {
  ADD_TO_CART,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  REMOVE_FROM_CART,
} from "../actionType/actionType";

const initialState = {
  cart: [],
  products: {
    isLoading: false,
    isLoadingSuccess: false,
    isError: false,
    product: [],
  },
};
const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case FETCH_START:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
        },
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          isLoadingSuccess: true,
          product: action.payload,
        },
      };
    case FETCH_ERROR:
      return {
        ...state,
        products: { ...state.products, isError: true },
      };
    default:
      return state;
  }
};
export default productReducer;
