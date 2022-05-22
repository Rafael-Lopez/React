import { Navigate, Route, Routes } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {

  /*
    React router v6 doesn't support 'exact' anymore.
      // old - v5 <Route exact path="/" component={Home} />
      // new - v6 <Route path="/" element={<Home />} />

    As stated in their documentation:
      You don't need to use an exact prop on <Route path="/"> anymore. This is because all paths match exactly by default. 
      If you want to match more of the URL because you have child routes use a trailing * as in <Route path="users/*">.
  */

  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
