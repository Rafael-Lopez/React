import { Fragment } from "react";

import Auth from "./components/Auth";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Auth></Auth>
      <Counter />
    </Fragment>
  );
}

export default App;
