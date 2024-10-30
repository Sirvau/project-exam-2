import { NavLink } from "react-router-dom";

function NavFooter() {
    return (
    <nav>
        <ul>
        <NavLink to="/"><li className="my-3 hover:scale-105 duration-300">Explore Venues</li></NavLink>
        <NavLink to="/admin-page"><li className="my-3 hover:scale-105 duration-300">Admin Venues</li></NavLink>
        <NavLink to="/profile-page"><li className="my-3 hover:scale-105 duration-300">Profile</li></NavLink>
      </ul>
    </nav>
      
    );
  }
  export default NavFooter;
  