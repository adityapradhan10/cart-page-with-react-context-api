import "./Header.css";
import { useProduct } from "../../context/Product/productContext";

const Header = () => {
  const { products } = useProduct();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">The Shopping Cart Page</div>
        <div className="nav">
          Cart <span className="item-count">{products.length}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
