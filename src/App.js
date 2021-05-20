import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import "./responsive.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;
