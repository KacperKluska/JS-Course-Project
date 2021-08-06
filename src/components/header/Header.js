import { useState, useEffect, useRef } from "react";
import NavButton from "../navButton/NavButton";
import "./index.scss";
import OutsideAlerter from "./OutsideAlerter";

export default function Header() {
  //   const toggleButton = document.getElementById("leftNavPhone");
  //   const leftNav = document.getElementById("leftNav");
  //   if (toggleButton != null) {
  //     toggleButton.addEventListener("click", () => {
  //       leftNav.style.display = "flex";
  //       //   leftNav.classList.toggle("active");
  //     });
  //   }

  const handleClick = () => {
    const leftNav = document.getElementById("leftNavDiv");
    // leftNav.style.display = "flex";
    leftNav.classList.add("active");
  };

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter>
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
        </OutsideAlerter>
        <a href="#" id="leftNavPhone" onClick={handleClick}>
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
