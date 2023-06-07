import { FaBell, FaHome, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="btm-nav">
      <Link to="/notifications">
        <FaBell />
      </Link>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/tasks">
        <FaTasks />
      </Link>
    </div>
  );
};

export default NavBar;
