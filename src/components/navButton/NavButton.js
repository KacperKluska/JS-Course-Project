import "./style.scss";

export default function NavButton({ icon, text, onClick }) {
  return (
    <li className="navButton" onClick={onClick}>
      <i className={icon}></i>
      {text}
    </li>
  );
}
