import './style.scss';

export default function HamburgerButton({ onClick, trigger }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`hamburgerButton${trigger === 'active' ? ' hidden' : ''}`}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  );
}
