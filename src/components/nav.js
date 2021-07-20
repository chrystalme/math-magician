import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Math-magician</Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotes">Quotes</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
