import "./style.scss";

export default function HamburgerButton({ onClick, trigger }) {
  return (
    <div
      onClick={onClick}
      className={`hamburgerButton${trigger === "active" ? " hidden" : ""}`}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
