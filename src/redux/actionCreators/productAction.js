import {
  ADD_TO_CART,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  REMOVE_FROM_CART,
} from "../actionType/actionType";
import getProduct from "../../services/Services";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_START });
    await getProduct()
      .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
      .catch((error) => dispatch({ type: FETCH_ERROR }));
  };
};
