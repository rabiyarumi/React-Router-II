import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h2 className="text-3xl">Navbar</h2>

      <nav className="my-10 space-x-5 text-purple-800 text-3xl">
        
        {/* <NavLink></NavLink> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
