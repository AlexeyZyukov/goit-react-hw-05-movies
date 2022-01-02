import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIservice from '../services/APIservice';
import defaultImage from '../defaultImages/no_foto_image.jpg';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    APIservice.fetchCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  // console.log('movieId', movieId);
  // console.log('cast: ', cast);

  return cast ? (
    <ul className={styles.wrapper}>
      {cast.map(item => {
        return (
          <li key={item.id} className={styles.noBullets}>
            <img
              className={styles.actorImg}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : defaultImage
              }
              alt={item.name}
            />
            <p>
              Actor: {item.name}
              <br />
              Character: {item.character}
            </p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There is no cast to show</p>
  );
}
