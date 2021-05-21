import { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";

const ProductState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "boAt Rockerz 450 Bluetooth Headset",
        desc: "Aqua Blue, On the Ear",
        img: "https://rukminim1.flixcart.com/image/416/416/k8lyc280/headphone/e/k/l/rockerz-450-boat-original-imafqkgctshgykzw.jpeg?q=70",
        price: 1499,
        quantity: 1,
      },
    ],
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ products: state.products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
