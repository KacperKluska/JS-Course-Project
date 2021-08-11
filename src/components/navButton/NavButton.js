import "./style.scss";

export default function NavButton({ icon, children, onClick }) {
  return (
    <li className="navButton" onClick={onClick}>
      <i className={icon}></i>
      {children}
    </li>
  );
}
