import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Button, Input } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import {
  toggleIsAdd,
  selectAdd,
  selectItems,
  selectTotalAmount,
} from './buySlice';
import styles from './Buy.css';

export default function Buy() {
  const dispatch = useDispatch();
  const isAdd = useSelector(selectAdd);
  const items = useSelector(selectItems);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className="d-flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="container-fluid">
        <div className={styles.buy}>
          <Row className="d-flex flex-row justify-content-between align-items-center">
            <h1 className={styles.heading}>What to Buy</h1>
            <Button
              type="button"
              color="primary"
              onClick={() => dispatch(toggleIsAdd())}
            >
              Add
            </Button>
          </Row>
          {isAdd ? (
            <Row className="d-flex flex-row justify-content-between pb-4">
              <div className="d-flex flex-row">
                <Input placeholder="Item to buy" className="mr-2" />
                <Input placeholder="Amount" />
              </div>
              <div>
                <Button color="success" className="mr-2">
                  Buy
                </Button>
                <Button color="danger" onClick={() => dispatch(toggleIsAdd())}>
                  Cancel
                </Button>
              </div>
            </Row>
          ) : null}
          <Row className="d-flex flex-row justify-content-end pt-2">
            <div>
              <span className={styles.subheading}>Total Amount: </span>
              <span className={styles.subheading}>{totalAmount}</span>
            </div>
          </Row>
          {items && items.length > 0
            ? items.map((item) => {
                return (
                  <Row
                    className="d-flex flex-row justify-content-between align-items-center py-2"
                    key={item.id}
                  >
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                    <Button color="danger">Remove</Button>
                  </Row>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
