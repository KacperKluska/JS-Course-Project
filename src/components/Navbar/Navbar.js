import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './style.scss';

export const navItems = [
  { label: 'For him' },
  { label: 'For her' },
  { label: 'Kids' },
  { label: 'About', ref: React.createRef() },
  { label: 'Contact', ref: React.createRef() },
];

export default function Navbar() {
  const scrollToElement = (ref) => {
    console.log('🚀 ~ file: Navbar.js ~ line 16 ~ scrollToElement ~ ref', ref);
    setTimeout(() => {
      if (ref && ref.current) {
        const offset = ref.current.offsetTop;
        window.scrollTo({ top: offset - 50, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <nav className="sticky">
      <div className="secondNavbar">
        <ul className="thirdList">
          {navItems.map((item) => (
            <NavItem key={item.label} onClick={() => scrollToElement(item.ref)}>
              {item.ref ? (
                <Link className="navbarLink" to="/">
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}
