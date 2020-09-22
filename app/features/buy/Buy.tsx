import React from 'react';
import { Row, Button } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Buy.css';

export default function Buy() {
  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="container-fluid">
        <div className={styles.buy}>
          <Row className="d-flex flex-row justify-content-between align-items-center">
            <h1 className={styles.heading}>What to Buy</h1>
            <Button type="button" color="primary">
              Add
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
