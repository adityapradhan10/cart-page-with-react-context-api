import {
  REMOVE_PRODUCT,
  INC_PRODUCT,
  DEC_PRODUCT,
  CALC_INIT_TOTAL,
} from "../type";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: action.payload.modifiedProducts,
        grandTotalPrice: action.payload.totalPrice,
      };

    case INC_PRODUCT:
      return {
        ...state,
        products: action.payload.modifiedProducts,
        grandTotalPrice: action.payload.totalPrice,
      };

    case DEC_PRODUCT:
      return {
        ...state,
        products: action.payload.modifiedProducts,
        grandTotalPrice: action.payload.totalPrice,
      };

    case CALC_INIT_TOTAL:
      return {
        ...state,
        grandTotalPrice: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
