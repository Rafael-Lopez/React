import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <Quote />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
