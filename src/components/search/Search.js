import "./style.scss";

export default function Search(props) {
  return (
    <div id="search" className={props.class ? "active" : "disable"}>
      <input type="text" id="searchInput" placeholder="Search..." />
    </div>
  );
}
