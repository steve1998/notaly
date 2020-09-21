import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Buy.css';

export default function Buy() {
  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="px-4 container-fluid">
        <h1 className={styles.heading}>What to Buy</h1>
      </div>
    </div>
  );
}
