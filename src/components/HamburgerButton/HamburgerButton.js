import "./style.scss";

export default function HamburgerButton(props) {
  return (
    <div
      onClick={props.func}
      className={`hamburgerButton${
        props.trigger === "active" ? " hidden" : ""
      }`}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
