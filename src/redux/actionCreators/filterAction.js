import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionType/actionType";

export const filterBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};

export const filterStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
