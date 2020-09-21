import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.css';
import routes from '../../constants/routes.json';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.linkDiv}>
        <Link className={styles.link} to={routes.HOME}>
          <div className={styles.text}>Home</div>
        </Link>
      </div>
      <div className={styles.linkDiv}>
        <Link className={styles.link} to={routes.BUY}>
          <div className={styles.text}>Buy</div>
        </Link>
      </div>
    </div>
  );
}
