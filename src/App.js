import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from '../src/views/HomePage';
import MoviesPage from './views/MoviesPage';
import Container from './components/Container/Container';

export default function App() {
  return (
    <Container>
      <AppBar />
      {/* <a href="/about">About</a> */}

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/moviesPage">
          <MoviesPage />
        </Route>
      </Switch>
    </Container>
  );
}
