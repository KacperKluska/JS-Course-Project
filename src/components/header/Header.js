import NavButton from "../NavButton/NavButton";
import "./style.scss";
import OutsideAlerter from "../OutsideClick/OutsideAlerter";

export default function Header() {
  const handleShowLeftMenu = () => {
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

  return (
    <header>
      <nav id="firstNavbar">
        <OutsideAlerter id={"leftNavDiv"} func={handleHideLeftMenu}>
          <ul id="leftNav">
            <NavButton icon="icon-login">Sign in</NavButton>
            <NavButton>Register</NavButton>
            <NavButton icon="icon-search" onClick={handleSearch}>
              Search
            </NavButton>
          </ul>
        </OutsideAlerter>
        <div href="#" id="leftNavPhone" onClick={handleShowLeftMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h1 id="logo" onClick="">
          SuitUp
        </h1>
        <ul id="rightNav">
          <NavButton icon="icon-gift">Gift Certificate</NavButton>
          <NavButton icon="icon-basket">Cart</NavButton>
        </ul>
      </nav>
    </header>
  );
}
