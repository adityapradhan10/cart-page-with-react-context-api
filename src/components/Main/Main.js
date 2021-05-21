import Products from "./Products/Products";
import Checkout from "./Checkout/Checkout";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Products />
      <Checkout />
    </main>
  );
};

export default Main;
