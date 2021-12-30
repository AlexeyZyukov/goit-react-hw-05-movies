import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from '../src/views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsView from '../src/views/MovieDetailsView';
import Container from './components/Container/Container';
import NotFoundView from './views/Not FoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* <Route path="/:movieId">
          <MovieDetailsView />
        </Route> */}

        <Route path="/moviesPage" exact>
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
