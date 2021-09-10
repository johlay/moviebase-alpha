import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./pages/HomePage";
import GenresPage from "./pages/GenresPage";

function App() {
  // create a react query - client
  const queryClient = new QueryClient();

  // change background color of whole app.
  document.body.className = "bg-secondary";

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/genres">
              <GenresPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;