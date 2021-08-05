import NavButton from "../navButton/NavButton";
import "./index.scss";

export default function Header() {
  return (
    <header>
      <nav id="firstNavbar">
        <ul id="leftNav">
          <li>
            <NavButton icon="icon-login" text="Sign in" />
          </li>
          <li>
            <NavButton text="Register" />
          </li>
          <li>
            <NavButton icon="icon-search" text="Search" />
          </li>
        </ul>
        <a href="#" id="leftNavPhone">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <h1>
          <a href="#">DressUp</a>
        </h1>
        <ul id="rightNav">
          <li>
            <NavButton icon="icon-gift" text="Gift Certificate" />
          </li>
          <li>
            <NavButton icon="icon-basket" text="Cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
