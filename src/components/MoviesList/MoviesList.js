import { Link, useLocation, useHistory } from 'react-router-dom';
import slugify from 'slugify';
import styles from './MoviesList.module.css';
import defaultImage from '../defaultImages/no_image_poster.jpg';
import { string } from 'prop-types';

export default function MoviesList({ url, movies }) {
  const location = useLocation();
  const history = useHistory();

  // const getMovieId = (array) => (
  //   array && array.map(item => item.id
  //   )
  // );
  // const movieId = getMovieId(movies);
  // console.log('movieId: ', movieId);

  const makeSlug = string => slugify(string, { lower: true });

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
                      // pathname: `${url}/${item.id}`,
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
                    {makeSlug(`${item.title} ${item.id}`)}
                  </Link>
                </li>
              ),
          )}
      </ul>
    </>
  );
}
