import "./style.scss";

export default function NavItem({ icon, children, onClick }) {
  return (
    <li className="navItem" onClick={onClick}>
      <i className={icon}></i>
      {children}
    </li>
  );
}
