import PageHeading from '../components/PageHeading/PageHeading';
import styles from './view.module.css';

export default function MoviesPage() {
  return (
    <>
      <PageHeading text="Movies" />
      <label>
        <input
          type="text"
          className={styles.inputField}
          placeHolder="input movie to search"
        ></input>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </label>
    </>
  );
}
