import "./Product.css";

const Product = (props) => {
  const { name, desc, img, price, quantity } = props;

  return (
    <div className="product">
      <div className="product__left">
        <img src={img} alt={name} className="product__image" />
        <div className="product__quantity quantity">
          <button className="quantity__dec">-</button>
          <div className="quantity__number">{quantity}</div>
          <button className="quantity__inc">+</button>
        </div>
      </div>
      <div className="product__right">
        <h1 className="product__name">{name}</h1>
        <h1 className="product__desc">{desc}</h1>
        <button className="product__delete">Remove</button>
        <div className="product__price">₹ {price}</div>
      </div>
    </div>
  );
};

export default Product;
