import NavButton from "../NavButton/NavButton";
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div id="secondNavbar">
        <ul id="thirdList">
          <NavButton>For him</NavButton>
          <NavButton>For her</NavButton>
          <NavButton>Kids</NavButton>
          <NavButton>Aboutr</NavButton>
          <NavButton>Contact</NavButton>
        </ul>
      </div>
    </nav>
  );
}
