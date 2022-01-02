import { Link, Route } from 'react-router-dom';
import styles from './MoviesList.module.css';
import defaultImage from '../defaultImages/no_image_poster.jpg';
import MovieDetailsView from '../../views/MovieDetailsView';

export default function MoviesList({ url, movies }) {
  console.log('url: ', url);
  console.log('movies: ', movies);
  // console.log(movieId)
  return (
    <>
      <ul className={styles.wrapper}>
        {movies &&
          movies.map(
            item =>
              item.title && (
                <li key={item.id} className={styles.noBullets}>
                  <Link to={`${url}/${item.id}`}>
                    <img
                      src={
                        item.poster_path
                          ? `https://www.themoviedb.org/t/p/w300${item.poster_path}`
                          : defaultImage
                      }
                      alt={item.title}
                    ></img>
                    <h4>{item.title}</h4>
                  </Link>
                </li>
              ),
          )}
      </ul>
      {/* <Route path='/movies/:item.id'>
        <MovieDetailsView movieId={movies} />
      </Route> */}
    </>
  );
}
