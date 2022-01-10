import { Link, useLocation, useHistory } from 'react-router-dom';
import slugify from 'slugify';
import styles from './MoviesList.module.css';
import defaultImage from '../defaultImages/no_image_poster.jpg';

export default function MoviesList({ url, movies }) {
  const location = useLocation();
  const makeSlug = string => slugify(string, { lower: true });

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
                      pathname: `${url}/${makeSlug(
                        `${item.title} ${item.id}`,
                      )}`,
                      state: {
                        from: {
                          location,
                          label: 'GoBack',
                        },
                      },
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
