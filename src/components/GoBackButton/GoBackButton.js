import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GoBackButton.module.css';

export default function GoBackButton({ onClick }) {
  const location = useLocation();
  const locationRef = useRef(location);

  // console.log('location: ', location);
  // console.log('locationRef: ', locationRef);
  // console.log('GoBackButton')

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {locationRef?.current?.state?.from?.label ?? 'GoBack'}
    </button>
  );
}
