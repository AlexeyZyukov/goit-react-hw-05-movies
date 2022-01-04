import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './searchBar.module.css';

export default function SearchBar() {
  const [nameToSearch, setNameToSearch] = useState('');
  const history = useHistory();
  const location = useLocation();

  console.log('location=> ', location);
  console.log('history=> ', history);

  const handleInputChange = event => {
    setNameToSearch(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onInputSubmit = event => {
    event.preventDefault();
    console.log('Hi');

    reset();
  };

  const reset = () => {
    setNameToSearch('');
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
        value={nameToSearch}
      ></input>
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
