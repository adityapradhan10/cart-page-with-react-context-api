import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductState from "./context/Product/ProductState";
import "./App.css";
import "./responsive.css";

const App = () => {
  return (
    <ProductState>
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    </ProductState>
  );
};

export default App;
