import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import styles from './searchbar.module.css';

export default function Searchbar(props) {
  const [name, setName] = useState('');

  const handleInputChange = e => {
    setName(e.currentTarget.value);
  };

  const onInputSubmit = e => {
    const { onSubmit } = props;
    e.preventDefault();
    onSubmit(name);
    reset();
  };

  const reset = () => {
    setName('');
  };
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onInputSubmit}>
        <input
          className={styles.SearchForm_input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={name}
        />
        <button className={styles.SearchForm_button} type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>
      </form>
    </header>
  );
}
