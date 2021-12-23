import React, { useEffect } from 'react';
import styles from './modal.module.css';

export default function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  const handleEscClick = evt => {
    if (evt.code === 'Escape') {
      props.closeModal();
    }
  };

  const { onToggleModal, image } = props;
  return (
    <div className={styles.overlay} onClick={onToggleModal} tabIndex="0">
      <div className={styles.modal}>
        <img src={image} alt={image.tags} />
      </div>
    </div>
  );
}
