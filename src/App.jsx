import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navigation from "./components/partials/Navigation";
import HomePage from "./pages/HomePage";
import GenresPage from "./pages/GenresPage";
import GenrePage from "./pages/GenrePage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import SearchPage from "./pages/SearchPage";
import RecentlyViewedMovies from "./components/movie/RecentlyViewedMovies";
import GlobalLoadingIndicator from "./components/partials/GlobalLoadingIndicator.jsx";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import ScrollTop from "./components/partials/ScrollTop";

function App() {
  // create a react query - client
  const queryClient = new QueryClient();

  // change background color of whole app.
  document.body.className = "bg-secondary";

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <div className="App">
        <MoviesContextProvider>
          <BrowserRouter>
            <ScrollTop />
            <Navigation />
            <GlobalLoadingIndicator />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route path="/actors/:actorId">
                <ActorPage />
              </Route>

              <Route path="/movies/:movieId">
                <MoviePage />
              </Route>

              <Route exact path="/genres/:genreId">
                <GenrePage />
              </Route>

              <Route exact path="/genres">
                <GenresPage />
              </Route>

              <Route path="/search">
                <SearchPage />
              </Route>

              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
            <RecentlyViewedMovies />
          </BrowserRouter>
        </MoviesContextProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
