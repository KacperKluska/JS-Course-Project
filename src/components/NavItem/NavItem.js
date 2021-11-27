import './style.scss';

export default function NavItem({
  icon,
  children,
  onClick,
  isDisabled = false,
}) {
  return (
    <li className="navItem">
      <button
        className={`navItemButton ${isDisabled && 'disabled'}`}
        disabled={isDisabled}
        type="button"
        onClick={onClick}
      >
        <i className={icon} />
        {children}
      </button>
    </li>
  );
}
