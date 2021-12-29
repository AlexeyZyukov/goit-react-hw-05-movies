import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';

export default function PopularMovies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    APIservice.fetchMoviesInTrend().then(res => setMovies(res.results));
    console.log(movies);
  }, []);

  return (
    <>
      <PageHeading text="Popular movies" />

      {movies &&
        movies.map(item => <li key={item.id}>{item.title || item.name}</li>)}
    </>
  );
}
