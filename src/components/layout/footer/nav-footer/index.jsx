import { NavLink } from "react-router-dom";

function NavFooter() {
    return (
    <nav>
        <ul>
        <NavLink to="/"><li className="my-3">Explore Venues</li></NavLink>
        <NavLink to="/admin-page"><li className="my-3">Admin Venues</li></NavLink>
        <NavLink to="/profile-page"><li className="my-3">Profile</li></NavLink>
      </ul>
    </nav>
      
    );
  }
  export default NavFooter;
  