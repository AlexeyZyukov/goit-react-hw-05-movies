import { Link } from 'react-router-dom';
import styles from './MoviesList.module.css';
import defaultImage from '../defaultImages/no_image_poster.jpg';

export default function MoviesList({ url, movies }) {
  return (
    <ul className={styles.wrapper}>
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <img
              src={
                item.poster_path
                  ? `https://www.themoviedb.org/t/p/w300${item.poster_path}`
                  : defaultImage
              }
              alt={item.title}
            ></img>
            {item.title ?? item.name}
            {/* <Link to={`${url}/${item.id}`}>{item.title ?? item.name}</Link> */}
          </li>
        ))}
    </ul>
  );
}
