import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

export default function Sidebar() {
  return (
    <div className="p-4">
      <Link to={routes.HOME}>
        <p>Home</p>
      </Link>
      <Link to={routes.BUY}>
        <p>Buy</p>
      </Link>
    </div>
  );
}
