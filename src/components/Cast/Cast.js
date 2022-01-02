import { useParams } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';
// import Cast from '../Cast/Cast'

export default function Cast() {
  const { movieId } = useParams();
  const { url } = useRouteMatch;

  return (
    <>
      Cast
      <p>{movieId}</p>
    </>
  );
}
