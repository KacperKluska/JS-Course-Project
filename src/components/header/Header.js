import NavButton from "../navButton/NavButton";
import "./index.scss";

export default function Header() {
  return (
    <header>
      <nav id="firstNavbar">
        <ul id="leftNav">
          <li>
            <NavButton text="Sign in" />
          </li>
          <li>
            <NavButton text="Register" />
          </li>
          <li>
            <NavButton text="Search" />
          </li>
        </ul>
        <h1>
          <a href="#">DressUp</a>
        </h1>
        <ul id="rightNav">
          <li>
            <NavButton text="Gift Certificate" />
          </li>
          <li>
            <NavButton text="Cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
