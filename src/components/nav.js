import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/App">Calculator</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Quotes">Quotes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
