import { Link } from 'react-router-dom';
import './style.scss';

export default function CustomLink({ path, children }) {
  return (
    <Link className="link" to={path}>
      {children}
    </Link>
  );
}
