import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './sidebar/Sidebar';
import styles from './Home.css';
import { selectDate, getCurrentDate } from './homeSlice';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const value = useSelector(selectDate);

  useEffect(() => {
    setInterval(() => {
      dispatch(getCurrentDate());
    }, 1000);
  });

  return (
    <div className="d-flex flex-row" data-tid="container">
      <div>
        <Sidebar />
      </div>
      <div className="d-flex flex-column px-4 container-fluid justify-content-center">
        <h1 className={styles.heading}>Welcome.</h1>
        <div>
          <span className={styles.subheading}>It is </span>
          <span className={styles.time}>{value}</span>
          <span className={styles.subheading}> now.</span>
        </div>
      </div>
    </div>
  );
}
