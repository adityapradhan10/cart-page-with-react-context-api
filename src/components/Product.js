import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__left">
        <img
          src="https://rukminim1.flixcart.com/image/416/416/k8lyc280/headphone/e/k/l/rockerz-450-boat-original-imafqkgctshgykzw.jpeg?q=70"
          alt="Rockerz 450 boat"
          className="product__image"
        />
        <div className="product__quantity quantity">
          <button className="quantity__dec">-</button>
          <div className="quantity__number">5</div>
          <button className="quantity__inc">+</button>
        </div>
      </div>
      <div className="product__right">
        <h1 className="product__name">boAt Rockerz 450 Bluetooth Headset</h1>
        <h1 className="product__desc">Aqua Blue, On the Ear</h1>
        <button className="product__delete">Remove</button>
        <div className="product__price">₹ 1,499</div>
      </div>
    </div>
  );
};

export default Product;
