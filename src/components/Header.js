import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">The Shopping Cart Page</div>
        <div className="nav">
          Cart <span className="item-count">5</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
