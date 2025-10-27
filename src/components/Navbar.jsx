import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-[#7e5bef] to-[#5b21b6]">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="http://localhost:1337/uploads/logo_white_f46e395f05.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal text-white text-sm md:text-lg px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
