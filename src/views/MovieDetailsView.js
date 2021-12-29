import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as APIservice from '../components/services/APIservice';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    APIservice.fetchMovieFullInfo(movieId).then(setMovie);
  }, [movieId]);

  console.log(movieId);
  return (
    <>
      <PageHeading text={`movie ${movieId}`} />

      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>
            <b>Movie name: </b>
            {movie.title}
          </h2>
          <p>
            <b>Overview: </b> {movie.overview}
          </p>
        </>
      )}
    </>
  );
}
