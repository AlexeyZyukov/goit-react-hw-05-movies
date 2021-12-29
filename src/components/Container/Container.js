import styles from './container.modules.css';

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
