import "./index.scss";

export default function NavButton({ icon, text, onClick }) {
  /**
   * TODO: text as children
   */
  return (
    <a href="#" onClick={onClick}>
      <i className={icon}></i>
      {text}
    </a>
  );
}
