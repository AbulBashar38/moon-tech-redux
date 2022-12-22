import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionType/actionType";

const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};
export const filterReducer = (state = initialState, action) => {
  const existingBrand = state.filters.brands.find(
    (brand) => brand === action.payload
  );
  switch (action.type) {
    case TOGGLE_BRAND:
      if (existingBrand) {
        const newBrands = state.filters.brands.filter(
          (brand) => brand !== action.payload
        );
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...newBrands],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      }
    case TOGGLE_STOCK:
      return {
        ...state,
        filters: { ...state.filters, stock: !state.filters.stock },
      };
    default:
      return state;
  }
};
