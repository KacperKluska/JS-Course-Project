import NavItem from "../NavItem/NavItem";
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div id="secondNavbar">
        <ul id="thirdList">
          <NavItem>For him</NavItem>
          <NavItem>For her</NavItem>
          <NavItem>Kids</NavItem>
          <NavItem>Aboutr</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
}
