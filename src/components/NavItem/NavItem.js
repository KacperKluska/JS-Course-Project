import './style.scss';

export default function NavItem({ icon, children, onClick }) {
  return (
    <li className="navItem">
      <button type="button" onClick={onClick}>
        <i className={icon} />
        {children}
      </button>
    </li>
  );
}
