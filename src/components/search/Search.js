import "./style.scss";
import NavItem from "../NavItem/NavItem";

export default function Search(props) {
  return (
    <div id="search" className={props.class}>
      <NavItem icon="icon-cancel" onClick={props.func}>
        Close
      </NavItem>
      <input type="text" id="searchInput" placeholder="Search..." />
    </div>
  );
}
