import { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const NewQuote = lazy(() => import('./pages/NewQuote'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact><AllQuotes /></Route>
          <Route path="/quotes/:quoteId"><QuoteDetail /></Route>
          <Route path="/new-quote"><NewQuote /></Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
