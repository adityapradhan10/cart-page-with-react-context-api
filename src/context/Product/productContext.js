import { createContext, useContext } from "react";
const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);
export default ProductContext;
