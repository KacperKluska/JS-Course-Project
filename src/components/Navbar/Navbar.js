import NavItem from "../NavItem/NavItem";
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div className="secondNavbar">
        <ul className="thirdList">
          <NavItem>For him</NavItem>
          <NavItem>For her</NavItem>
          <NavItem>Kids</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
}
