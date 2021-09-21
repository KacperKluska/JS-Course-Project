import "./style.scss";
import NavItem from "../NavItem/NavItem";

export default function Search({ searchRef, styleClass, onClick }) {
  return (
    <div id="search" className={styleClass}>
      <NavItem icon="icon-cancel" onClick={onClick}>
        Close
      </NavItem>
      <input
        ref={searchRef}
        type="text"
        id="searchInput"
        placeholder="Search..."
      />
    </div>
  );
}
