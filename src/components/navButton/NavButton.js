import "./index.scss";

export default function NavButton({ icon, text }) {
  return (
    <a href="#">
      <i className={icon}></i>
      {text}
    </a>
  );
}
