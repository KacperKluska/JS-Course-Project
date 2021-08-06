import "./index.scss";

export default function NavButton({ icon, text, onClick }) {
  return (
    <a href="#" onClick={onClick}>
      <i className={icon}></i>
      {text}
    </a>
  );
}
