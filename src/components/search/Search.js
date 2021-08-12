import "./style.scss";

export default function Search(props) {
  return (
    <div id="search" className={props.class}>
      <input type="text" id="searchInput" placeholder="Search..." />
    </div>
  );
}
