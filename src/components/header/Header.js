import NavItem from "../NavItem/NavItem";
import "./style.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";
import { useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

export default function Header({ searchVisible, setSearchVisible }) {
  const [leftMenu, setLeftMenu] = useState("none");

  // const handleLeftMenu = () => {
  //   setLeftMenu((prev) => (prev = !prev));
  // };

  const handleLeftMenuShow = () => {
    setLeftMenu("active");
  };

  const handleLeftMenuClose = () => {
    setLeftMenu((prev) => {
      if (prev === "active") {
        return "disable";
      } else {
        return "none";
      }
    });
    setTimeout(() => {
      setLeftMenu("none");
    }, 300);
  };

  const handleSearch = () => {
    setSearchVisible();
    const searchInput = document.getElementById("searchInput");
    searchInput.focus();
  };

  return (
    <header id="mainHeader">
      <nav id="firstNavbar">
        <OutsideAlerter
          id="outsideAlert"
          func={handleLeftMenuClose}
          class={leftMenu}
        >
          <div id="leftNavDiv">
            <ul id="leftNav" className={leftMenu}>
              <NavItem icon="icon-login">Sign in</NavItem>
              <NavItem>Register</NavItem>
              <NavItem
                icon={
                  searchVisible === "active" ? "icon-cancel" : "icon-search"
                }
                onClick={() => {
                  handleSearch();
                  handleLeftMenuClose();
                }}
              >
                Search
              </NavItem>
            </ul>
          </div>
          <HamburgerButton trigger={leftMenu} func={handleLeftMenuShow} />
        </OutsideAlerter>
        <h1 id="logo">SuitUp</h1>
        <ul id="rightNav">
          <NavItem icon="icon-gift">Gift Certificate</NavItem>
          <NavItem icon="icon-basket">Cart</NavItem>
        </ul>
      </nav>
    </header>
  );
}
