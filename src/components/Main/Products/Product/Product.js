import { useProduct } from "../../../../context/Product/productContext";
import "./Product.css";

const Product = (props) => {
  const { id, name, desc, img, price, quantity } = props;
  const { removeProduct, incProduct, decProduct } = useProduct();

  return (
    <div className="product">
      <div className="product__left">
        <img src={img} alt={name} className="product__image" />
        <div className="product__quantity quantity">
          <button
            onClick={() => {
              decProduct(id);
            }}
            className="quantity__dec"
            disabled={quantity <= 1}
          >
            -
          </button>
          <div className="quantity__number">{quantity}</div>
          <button
            onClick={() => {
              incProduct(id);
            }}
            className="quantity__inc"
            disabled={quantity >= 15}
          >
            +
          </button>
        </div>
      </div>
      <div className="product__right">
        <h1 className="product__name">{name}</h1>
        <h1 className="product__desc">{desc}</h1>
        <button
          onClick={() => {
            removeProduct(id);
          }}
          className="product__delete"
        >
          Remove
        </button>
        <div className="product__price">₹ {price}</div>
      </div>
    </div>
  );
};

export default Product;
