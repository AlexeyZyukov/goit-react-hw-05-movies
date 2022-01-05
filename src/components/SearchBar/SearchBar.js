import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './searchBar.module.css';

export default function SearchBar() {
  const [movieToSearch, setMovieToSearch] = useState('');
  const history = useHistory();
  const location = useLocation();

  // console.log('location=> ', location);
  console.log('history=> ', history);

  const handleInputChange = event => {
    setMovieToSearch(event.currentTarget.value);
    // console.log('input value: ', movieToSearch);
  };

  const onInputSubmit = event => {
    event.preventDefault();

    // onSubmit(movieToSearch)
    history.push({ ...location, search: `query=${movieToSearch}` });
    reset();
  };

  const reset = () => {
    setMovieToSearch('');
  };

  return (
    <form onSubmit={onInputSubmit} className={styles.SearchForm}>
      <input
        className={styles.inputField}
        type="text"
        name="nameToSearch"
        placeholder="input movie to search"
        autoFocus={true}
        onChange={handleInputChange}
        value={movieToSearch}
      ></input>
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
