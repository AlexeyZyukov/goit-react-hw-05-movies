import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import HomePage from '../src/views/HomePage';

export default function App() {
  return (
    <>
      <AppBar />
      {/* <a href="/about">About</a> */}

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
