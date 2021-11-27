import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarDropdown({ title, items }) {
  return (
    <li className="navDropdown">
      <div className="navDropdownTitle">{title}</div>
      <ul className="navDropdownList">
        {items.map((item) => (
          <Link key={item.name} to="/account">
            <li className="navDropdownItem">{item.name}</li>
          </Link>
        ))}
      </ul>
    </li>
  );
}

export default NavbarDropdown;
