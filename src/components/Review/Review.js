import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as APIservice from '../services/APIservice';

export default function Review() {
  const [movieId] = useParams;
  const [review, setReview] = useState(null);

  console.log(review);

  useEffect(() => {
    APIservice.fetchReview(movieId).then(setReview);
  }, [movieId]);

  return <p>Review</p>;
}
