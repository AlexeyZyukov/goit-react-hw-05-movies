import { useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

export default function ImageGallery({ pictures, toggleModal }) {
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scroll();
  }, [pictures]);

  return (
    <ul class={styles.gallery}>
      {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          tags={tags}
          largeImage={largeImageURL}
          onClickImg={() => {
            toggleModal(largeImageURL);
          }}
        />
      ))}
    </ul>
  );
}
