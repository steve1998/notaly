import React from 'react';
import Sidebar from './sidebar/Sidebar';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className="d-flex flex-row" data-tid="container">
      <div>
        <Sidebar />
      </div>
      <div className="px-4 container-fluid">
        <h1 className={styles.heading}>Welcome.</h1>
      </div>
    </div>
  );
}
