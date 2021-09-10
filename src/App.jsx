import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navigation from "./components/navigation/Navigation";

function App() {
  // create a react query - client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>{/* <Route exact path="/"></Route> */}</Switch>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
