import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as APIservice from '../services/APIservice';
import styles from './Review.module.css';

export default function Review() {
  const slug = useParams();
  const [review, setReview] = useState('');
  const movieId = slug.movieId.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    async function getReview() {
      const resp = await APIservice.fetchReview(movieId);
      const result = resp.results;
      setReview(result);
    }
    if (movieId) getReview();
  }, [movieId]);

  return review.length > 0 ? (
    <ul className={styles.reviewsList}>
      {review.map(item => {
        return (
          <li key={item.id} className={styles.noBullets}>
            <p>
              <b>Author:</b> {item.author}
              <br />
              <b>Review:</b> {item.content}
            </p>
            <hr />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There is no review yet</p>
  );
}
