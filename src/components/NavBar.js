/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <nav className="panel-bg flex">
    <div className="nav-title flex">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <a href="#">Books</a>
      <a href="#">Categories</a>
    </div>
    <div className="profile-pic flex">
      <FontAwesomeIcon icon={faUserCircle} size="lg" className="user-icon" />
    </div>
  </nav>
);

export default NavBar;
