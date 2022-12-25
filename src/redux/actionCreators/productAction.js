import {
  deleteProduct,
  getProduct,
  sendProduct,
  updateProduct,
} from "../../services/Services";
import {
  ADD_TO_CART,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  PRODUCT_ADD,
  PRODUCT_DELETE,
  PRODUCT_UPDATE,
  REMOVE_FROM_CART,
} from "../actionType/actionType";

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
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_START });
    await getProduct()
      .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data.data }))
      .catch((error) => dispatch({ type: FETCH_ERROR }));
  };
};

export const sendData = (product) => {
  return async (dispatch, getState) => {
    await sendProduct(product).then((res) => {
      if (res.data.acknowledged) {
        dispatch({ type: PRODUCT_ADD, payload: product });
      }
    });
  };
};
export const deleteData = (id) => {
  return async (dispatch, getState) => {
    await deleteProduct(id).then((res) => {
      if (res.acknowledged) {
        dispatch({ type: PRODUCT_DELETE, payload: id });
      }
    });
  };
};
export const updateData = (id, product) => {
  return async (dispatch, getState) => {
    await updateProduct(id, product).then((res) => {
      if (res.data.modifiedCount) {
        dispatch({
          type: PRODUCT_UPDATE,
          payload: { id: id, product: { ...product } },
        });
      }
    });
  };
};
