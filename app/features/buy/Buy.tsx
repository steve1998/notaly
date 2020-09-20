import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import routes from '../../constants/routes.json';

export default function Buy() {
  return (
    <div>
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col>
          <h1>What to Buy</h1>
        </Col>
      </Row>
    </div>
  );
}
