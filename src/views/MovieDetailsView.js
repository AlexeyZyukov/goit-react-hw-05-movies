import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';
import GoBackButton from '../components/GoBackButton/GoBackButton';
import Cast from '../components/Cast/Cast';
import Review from '../components/Review/Review';
import defaultImage from '../components/defaultImages/no_image_poster.jpg';
import styles from './view.module.css';

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const locationRef = useRef(location);
  const slug = useParams();
  const movieId = slug.movieId.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    APIservice.fetchMovieFullInfo(movieId).then(setMovie);
  }, [movieId]);

  function goBack() {
    history.push(locationRef?.current?.state?.from?.location ?? '/');
  }

  return (
    <>
      <PageHeading text={`Movie details`} />
      <GoBackButton onClick={goBack} />
      {movie && (
        <ul className={styles.wrapper}>
          <img
            className={styles.box1}
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w300${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
          <h2>{movie.original_title}</h2>
          <p>
            <b>User score: </b>
            {movie.vote_average}
            <span> %</span>
          </p>
          <p>
            <b>Description: </b> {movie.overview}
          </p>
          <p>
            <b>Genres: </b>
            {movie.genres
              ? movie.genres.map(item => item.name).join(' ')
              : `unknown genre`}
          </p>
        </ul>
      )}
      <hr />
      {movie && (
        <div className={styles.additionalInfo}>
          <h2>Additional information</h2>
          <nav>
            <NavLink
              to={`${url}/cast`}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <li className={styles.noBullets}>Cast</li>
            </NavLink>

            <NavLink
              to={`${url}/review`}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <li className={styles.noBullets}>Review</li>
            </NavLink>
          </nav>

          <hr />
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/review`}>
            <Review movieId={movieId} />
          </Route>
        </div>
      )}
    </>
  );
}
