import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import NavItem from '../NavItem/NavItem';
import './style.scss';

export const navItems = [
  { label: 'For her', isDisabled: true },
  { label: 'Kids', isDisabled: true },
  { label: 'About', isDisabled: false, ref: React.createRef() },
  { label: 'Contact', isDisabled: false, ref: React.createRef() },
];

export default function Navbar() {
  const scrollToElement = (ref) => {
    setTimeout(() => {
      if (ref && ref.current) {
        const offset = ref.current.offsetTop;
        window.scrollTo({ top: offset - 50, behavior: 'smooth' });
      }
    }, 0);
  };

  const forHimItems = [{ name: 'Suits' }, { name: 'Shoes' }];

  return (
    <nav className="sticky">
      <div className="secondNavbar">
        <ul className="thirdList">
          <NavbarDropdown title="For him" items={forHimItems} />
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              isDisabled={item.isDisabled}
              onClick={() => scrollToElement(item.ref)}
            >
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
