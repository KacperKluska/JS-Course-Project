import NavItem from "../NavItem/NavItem";
import "./style.scss";

export default function Navbar() {
  const scrollToElById = (id) => {
    const offset = document.getElementById(`${id}`).offsetTop;
    window.scrollTo({ top: offset - 50, behavior: "smooth" });
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
          <NavItem onClick={() => scrollToElById("About")}>About</NavItem>
          <NavItem onClick={() => scrollToElById("Contact")}>Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
}
