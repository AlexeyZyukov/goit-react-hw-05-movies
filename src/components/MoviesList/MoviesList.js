import { Link, useLocation, useHistory } from 'react-router-dom';
import styles from './MoviesList.module.css';
import defaultImage from '../defaultImages/no_image_poster.jpg';

export default function MoviesList({ url, movies }) {
  const location = useLocation();
  const history = useHistory();

  // console.log('url: ', url);
  // console.log('movies: ', movies);
  // console.log(movieId)
  // console.log('location=> ', location);
  // console.log('history=> ', history);
  return (
    <>
      <ul className={styles.wrapper}>
        {movies &&
          movies.map(
            item =>
              item.title && (
                <li key={item.id} className={styles.noBullets}>
                  <Link
                    to={{
                      pathname: `${url}/${item.id}`,
                      state: { from: location },
                    }}
                  >
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
    </>
  );
}
