import { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import LoadError from './components/LoadError/LoadError';
import Spinner from './components/Spinner/Spinner';
import fetchPictures from './components/API/APIservice';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default function App() {
  const [pictureName, setPictureName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [biggerImage, setBiggerImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearchSubmit = pictureName => {
    if (!pictureName) {
      return alert('Nothing to search. Enter name, please.');
    }
    setPage(1);
    setPictures([]);
    setPictureName(pictureName);
  };

  const wrapperForFetch = useCallback(() => {
    fetchPictures(pictureName, page)
      .then(data => {
        setPictures(pictures => [...pictures, ...data.hits]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pictureName, page]);

  useEffect(() => {
    if (pictureName === '') return;
    setStatus('pending');
    wrapperForFetch();
  }, [pictureName, wrapperForFetch, page]);

  function loadMore() {
    setPage(page + 1);
  }

  const toggleModal = largeImageURL => {
    setShowModal(!showModal);
    setBiggerImage(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {status === 'idle' && <p>Input name of picture to search</p>}
      {status === 'pending' && <Spinner />}

      {status === 'rejected' && <LoadError message={error.message} />}

      {status === 'resolved' && (
        <div className={styles.App}>
          <ImageGallery pictures={pictures} toggleModal={toggleModal} />
          <Button onClickLoad={loadMore} />
        </div>
      )}

      {showModal && (
        <Modal
          onToggleModal={() => {
            toggleModal();
          }}
          image={biggerImage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
