import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';
import * as APIservice from '../components/services/APIservice';
import styles from './view.module.css';

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState('');
  const history = useHistory();
  const location = useLocation();

  // console.log('history=> ', history);

  const searchQuery = new URLSearchParams(location.search).get('query');
  // console.log('location=> ', location);
  // console.log(searchQuery);

  useEffect(() => {
    searchQuery &&
      APIservice.fetchOnSearch(searchQuery).then(res =>
        setMovieSearch(res.results),
      );
  }, [searchQuery, location, history]);

  return (
    <>
      <PageHeading text="Movies" />
      <SearchBar />
      <MoviesList url={`movies`} movies={movieSearch} />
    </>
  );
}
