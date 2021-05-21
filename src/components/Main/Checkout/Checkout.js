import { useEffect } from "react";
import { useProduct } from "../../../context/Product/productContext";
import "./Checkout.css";

const Checkout = () => {
  const { grandTotalPrice, calculateInitGrandTotal } = useProduct();

  useEffect(() => {
    calculateInitGrandTotal();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="checkout">
      <h2>Price details</h2>
      <div className="amount">
        <div className="amount__text">Total Amount</div>
        <div className="amount__total">₹ {grandTotalPrice}</div>
      </div>
      <button className="btn-checkout">Place Order</button>
    </div>
  );
};

export default Checkout;
