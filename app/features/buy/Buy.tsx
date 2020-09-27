import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Button, Input } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import {
  toggleIsAdd,
  selectAdd,
  selectItems,
  selectTotalAmount,
  fetchItemsDB,
  removeItem,
  addItem,
} from './buySlice';
import ItemList from '../../types/items';
import generateRandomString from '../../helpers/idGenerator';
import styles from './Buy.css';

export default function Buy() {
  const [descriptionVal, setDescriptionVal] = useState('');
  const [amountVal, setAmountVal] = useState(0);
  const dispatch = useDispatch();
  const isAdd: boolean = useSelector(selectAdd);
  const items: Array<ItemList> | null = useSelector(selectItems);
  const totalAmount: number = useSelector(selectTotalAmount);

  useEffect(() => {
    dispatch(fetchItemsDB());
  }, [dispatch]);

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleAdd = (description: string, amount: number) => {
    const newItem: ItemList = {
      id: generateRandomString(),
      description,
      amount,
    };

    dispatch(addItem(newItem));
  };

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
                <Input
                  id="description"
                  placeholder="Item to buy"
                  className="mr-2"
                  onChange={(event) => setDescriptionVal(event.target.value)}
                />
                <Input
                  id="amount"
                  placeholder="Amount"
                  onChange={(event) => {
                    setAmountVal(parseInt(event.target.value, 10));
                  }}
                />
              </div>
              <div>
                <Button
                  color="success"
                  className="mr-2"
                  onClick={() => {
                    if (descriptionVal && amountVal) {
                      handleAdd(descriptionVal, amountVal);
                    }
                    dispatch(toggleIsAdd());
                  }}
                >
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
              <span className={styles.subheading}>Total Amount: $</span>
              <span className={styles.subheading}>{totalAmount}</span>
            </div>
          </Row>
          {items && items.length > 0 && items[0] !== null
            ? items.map((item) => {
                return (
                  <Row
                    className="d-flex flex-row justify-content-between align-items-center py-2"
                    key={item.id}
                  >
                    <p>{item.description}</p>
                    <p>{item.amount}</p>
                    <Button
                      color="danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Row>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
