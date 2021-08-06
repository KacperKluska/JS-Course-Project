import { useState, useEffect, useRef } from "react";
import NavButton from "../navButton/NavButton";
import "./index.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";

export default function Header() {
  const handleClick = () => {
    const leftNav = document.getElementById("leftNavDiv");
    leftNav.classList.add("active");
  };

  const handleHideLeftMenu = () => {
    const leftNav = document.getElementById("leftNavDiv");
    leftNav.classList.remove("active");
  };

  const handleSearch = () => {
    const search = document.getElementById("search");
    search.classList.toggle("active");
    const searchInput = document.getElementById("searchInput");
    searchInput.focus();
  };

  const handleSearchClose = () => {
    const search = document.getElementById("search");
    search.classList.remove("active");
  };

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter id={"leftNavDiv"} func={handleHideLeftMenu}>
          <ul id="leftNav">
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
        <a href="#" id="leftNavPhone" onClick={handleClick}>
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
