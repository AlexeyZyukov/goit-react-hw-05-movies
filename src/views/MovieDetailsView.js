import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';
import defaultImage from '../components/defaultImages/no_image_poster.jpg';
import styles from './view.module.css';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    APIservice.fetchMovieFullInfo(movieId).then(setMovie);
  }, [movieId]);

  console.log(movieId);
  return (
    <>
      <PageHeading text={`Movie details`} />

      {movie && (
        <div className={styles.wrapper}>
          <img
            src={
              movie.poster_path
                ? `https://www.themoviedb.org/t/p/w300${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
            className={styles.box1}
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
        </div>
      )}
    </>
  );
}
