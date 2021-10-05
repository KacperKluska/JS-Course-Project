import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import CustomLink from "../CustomLink/CustomLink";
import "./style.scss";

export default function Navbar() {
  const scrollToElById = (id) => {
    setTimeout(() => {
      const element = document.getElementById(`${id}`);
      if (element === null) {
        return;
      }
      const offset = element.offsetTop;
      window.scrollTo({ top: offset - 50, behavior: "smooth" });
    }, 0);
  };

  /**
   * TOASK
   * How can I do it with useRef ?
   */

  return (
    <nav className="sticky">
      <div className="secondNavbar">
        <ul className="thirdList">
          <NavItem>For him</NavItem>
          <NavItem>For her</NavItem>
          <NavItem>Kids</NavItem>
          <NavItem onClick={() => scrollToElById("About")}>
            <Link className="navbarLink" to="/">
              About
            </Link>
          </NavItem>
          <NavItem onClick={() => scrollToElById("Contact")}>
            <Link className="navbarLink" to="/">
              Contact
            </Link>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}
