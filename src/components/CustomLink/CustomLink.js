import { Link } from "react-router-dom";
import "./style.scss";

export default function CustomLink(props) {
  return (
    <Link className="link" to={props.path}>
      {props.children}
    </Link>
  );
}
