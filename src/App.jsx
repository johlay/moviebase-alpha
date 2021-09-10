import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";

function App() {
  // create a react query - client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
