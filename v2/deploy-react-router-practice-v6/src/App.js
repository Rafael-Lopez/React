import React, { Suspense } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

/*
  Lazy Initizalization: This function will be executed by React, when this new quote component is needed.
  It will not be executed in advance to download the code, but only when it's needed. This will therefore 
  create a separate code chunk which is only downloaded when this new quote page is visited.

  Now, the download can take a couple of milliseconds or even seconds maybe, and while we're downloading this code,
  React is of course not able to continue. We can't load this component yet until the download completed.
  That's why we need to define a fallback UI, some fallback content which can be shown if this download takes a bit longer.
  For this, we can use the Suspense element from React.
*/
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
