import React from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './sidebar/Sidebar';

export default function Home(): JSX.Element {
  return (
    <div data-tid="container">
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col>
          <h2>Welcome.</h2>
        </Col>
      </Row>
    </div>
  );
}
