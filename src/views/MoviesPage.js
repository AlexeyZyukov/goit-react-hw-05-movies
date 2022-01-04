import { useHistory, useLocation } from 'react-router-dom';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './view.module.css';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  console.log('location=> ', location);
  console.log('history=> ', history);

  const searchQuery = new URLSearchParams(location.search);
  console.log('searchQuery=> ', searchQuery);

  return (
    <>
      <PageHeading text="Movies" />
      <SearchBar />
    </>
  );
}
