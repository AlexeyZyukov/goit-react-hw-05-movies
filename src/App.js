import { Switch, Route, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import AppBar from './components/AppBar/AppBar';
// import HomePage from '../src/views/HomePage';
import Preloader from './components/Preloader/Prreloader';

import Container from './components/Container/Container';

const HomePage = lazy(() => import('../src/views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsView = lazy(() => import('../src/views/MovieDetailsView'));
const NotFoundView = lazy(() => import('./views/Not FoundView'));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Redirect to="/" />

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
