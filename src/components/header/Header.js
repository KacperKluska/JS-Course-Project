import React from "react";
import NavButton from "../navButton/NavButton";
import "./index.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";
import Search from "../search/Search";

export default function Header() {
  const [navActive, setNavActive] = React.useState(false);

  /**
    TODO: change nav and search logic to useState based
  */

  const handleNavVisibility = () => {
    setNavActive((prev) => !prev);
  };

  const handleSearch = () => {
    const search = document.getElementById("search");
    search.classList.toggle("active");
    const searchInput = document.getElementById("searchInput");
    searchInput.focus();
  };

  // const handleSearchClose = () => {
  //   const search = document.getElementById("search");
  //   search.classList.remove("active");
  // };

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter
          id="leftNavDiv"
          className={navActive ? "active" : "inactive"}
          func={handleNavVisibility}
        >
          <ul id="leftNav">
            {/**
             * TODO: move li to NavButton component (should be renamed to
            NavItem)
             */}
            <li>
              <NavButton icon="icon-login" text="Sign in" />
            </li>
            <li>
              <NavButton text="Register" />
            </li>
            <li>
              <NavButton
                icon="icon-search"
                text="Search"
                onClick={handleSearch}
              />
            </li>
          </ul>
        </OutsideAlerter>
        <a href="#" id="leftNavPhone" onClick={handleNavVisibility}>
          {/**
            TODO: create element e.g HamburgerMenu
          */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <h1>
          <a href="#">SuitUp</a>
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
