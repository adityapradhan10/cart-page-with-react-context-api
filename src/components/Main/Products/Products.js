import Product from "./Product/Product";
import { useProduct } from "../../../context/Product/productContext";
import "./Products.css";

const Products = () => {
  const { products } = useProduct();
  let totalProducts = 0;
  products.forEach((product) => {
    totalProducts += product.quantity;
  });

  return (
    <div className="products">
      <h2>My Cart ({totalProducts})</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            desc={product.desc}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
          />
        );
      })}
    </div>
  );
};

export default Products;
