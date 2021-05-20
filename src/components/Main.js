import Products from "./Products";
import Checkout from "./Checkout";
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
