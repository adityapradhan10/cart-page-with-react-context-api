import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Price details</h2>
      <div className="amount">
        <div className="amount__text">Total Amount</div>
        <div className="amount__total">₹ 7495</div>
      </div>
      <button className="btn-checkout">Place Order</button>
    </div>
  );
};

export default Checkout;
