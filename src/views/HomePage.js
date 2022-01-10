import { useState, useEffect, lazy, Suspense } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';
import Preloader from '../components/Preloader/Preloader';
const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

export default function PopularMovies() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    APIservice.fetchMoviesInTrend().then(res =>
      // console.log(res.results)
      setMovies(res.results),
    );
  }, []);
  // console.log(url);

  return (
    <>
      <PageHeading text="Popular movies" />
      <Suspense fallback={<Preloader />}>
        <MoviesList url={`${url}movies`} movies={movies} />
      </Suspense>
    </>
  );
}
