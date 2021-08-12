import "./style.scss";

export default function HamburgerButton(props) {
  return (
    <div
      id="leftNavPhone"
      onClick={props.func}
      className={props.trigger === "disable" ? "hide" : null}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
