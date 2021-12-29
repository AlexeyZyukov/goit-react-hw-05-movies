import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';

export default function PopularMovies() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  console.log(url);

  useEffect(() => {
    APIservice.fetchMoviesInTrend().then(res => setMovies(res.results));
    console.log(movies);
  }, []);

  return (
    <>
      <PageHeading text="Popular movies" />

      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <Link to={`${url}${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
    </>
  );
}
