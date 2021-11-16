import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import './style.scss';

export default function Navbar({ ref1, ref2 }) {
  const scrollToElById = (id) => {
    setTimeout(() => {
      const element = id === 'About' ? ref1 : ref2;
      if (element) {
        const offset = element.current.offsetTop;
        window.scrollTo({ top: offset - 50, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <nav className="sticky">
      <div className="secondNavbar">
        <ul className="thirdList">
          <NavItem>For him</NavItem>
          <NavItem>For her</NavItem>
          <NavItem>Kids</NavItem>
          <NavItem onClick={() => scrollToElById('About')}>
            <Link className="navbarLink" to="/">
              About
            </Link>
          </NavItem>
          <NavItem onClick={() => scrollToElById('Contact')}>
            <Link className="navbarLink" to="/">
              Contact
            </Link>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}
