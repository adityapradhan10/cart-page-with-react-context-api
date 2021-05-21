import { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import { ProductData } from "../../data/ProductData";
import {
  REMOVE_PRODUCT,
  INC_PRODUCT,
  DEC_PRODUCT,
  CALC_INIT_TOTAL,
} from "../type";

const ProductState = (props) => {
  const initialState = {
    products: ProductData,
    grandTotalPrice: 0,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const findProduct = (productId) =>
    state.products[
      state.products.findIndex((product) => product.id === productId)
    ];

  const removeProduct = (productId) => {
    let product = findProduct(productId);
    let modifiedProducts = state.products.filter((value) => value !== product);
    let totalPrice = state.grandTotalPrice - product.quantity * product.price;

    dispatch({
      type: REMOVE_PRODUCT,
      payload: { modifiedProducts, totalPrice },
    });
  };

  const incProduct = (productId) => {
    let modifiedProducts = state.products.map((product) => {
      if (product.id === productId) {
        let modifiedProduct = { ...product, quantity: product.quantity + 1 };
        return modifiedProduct;
      } else {
        return product;
      }
    });

    let product = findProduct(productId);
    let totalPrice = state.grandTotalPrice + product.price;

    dispatch({
      type: INC_PRODUCT,
      payload: { modifiedProducts, totalPrice },
    });
  };

  const decProduct = (productId) => {
    let modifiedProducts = state.products.map((product) => {
      if (product.id === productId) {
        let modifiedProduct = { ...product, quantity: product.quantity - 1 };
        return modifiedProduct;
      } else {
        return product;
      }
    });

    let product = findProduct(productId);
    let totalPrice = state.grandTotalPrice - product.price;

    dispatch({
      type: DEC_PRODUCT,
      payload: { modifiedProducts, totalPrice },
    });
  };

  const calculateInitGrandTotal = () => {
    let grandTotal = 0;
    state.products.forEach((product) => {
      grandTotal += product.quantity * product.price;
    });

    dispatch({
      type: CALC_INIT_TOTAL,
      payload: grandTotal,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        grandTotalPrice: state.grandTotalPrice,
        removeProduct,
        incProduct,
        decProduct,
        calculateInitGrandTotal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
