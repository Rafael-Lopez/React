import { Redirect, Route, Switch } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

/*
  <Switch>: Renders the first child <Route> or <Redirect> that matches the location. Without it, all Routes that match (and 
  by match we mean, all routes that start with the given path) will be rendered.
*/

/*
  When wrapping our Routes with Switch, React router simply goes through your routes top to bottom. When it finds a match,
  (if it finds a match), it will then stop, because of Switch, and will render that one route for which it did find a match.
  It will not look at the other routes. 

  In our example below, we can either use 'exact', or put the Route at the bottom.
*/

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
