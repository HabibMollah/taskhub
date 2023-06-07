import { FaBell, FaHome, FaTasks } from 'react-icons/fa';
const NavBar = () => {
  return (
    <div className="btm-nav">
      <button>
        <FaBell />
      </button>
      <button className="active">
        <FaHome />
      </button>
      <button>
        <FaTasks />
      </button>
    </div>
  );
};

export default NavBar;
