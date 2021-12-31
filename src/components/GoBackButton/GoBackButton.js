import { useHistory } from 'react-router-dom';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  const history = useHistory();
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => history.go(-1)}
    >
      GoBack
    </button>
  );
}
