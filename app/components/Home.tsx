import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

export default function Home(): JSX.Element {
  return (
    <div data-tid="container">
      <h2>Welcome.</h2>
      <Link to={routes.BUY}>to Buy</Link>
    </div>
  );
}
