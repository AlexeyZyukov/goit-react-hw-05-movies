import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as APIservice from '../services/APIservice';
import styles from './Review.module.css';

export default function Review() {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  // console.log('movieId', movieId);
  // console.log('review: ', review);

  useEffect(() => {
    APIservice.fetchReview(movieId).then(res => setReview(res.results));
  }, [movieId]);

  return review ? (
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
