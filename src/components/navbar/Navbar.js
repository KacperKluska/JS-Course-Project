import "./index.scss";

export default function Navbar() {
  return (
    <nav className="sticky">
      <div id="secondNavbar">
        <ul id="thirdList">
          <li className="thirdNavbaritem">
            <a href="#">For her</a>
          </li>
          <li className="thirdNavbaritem">
            <a href="#">For him</a>
          </li>
          <li className="thirdNavbaritem">
            <a href="#">Kids</a>
          </li>
          <li className="thirdNavbaritem">
            <a href="#">About</a>
          </li>
          <li className="thirdNavbaritem">
            <a href="#">Contact</a>
          </li>
          {/* <a href="#">
            <li className="thirdNavbaritem">Contact</li>
          </a> */}
        </ul>
      </div>
    </nav>
  );
}
