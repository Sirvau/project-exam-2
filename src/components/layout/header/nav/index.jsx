import { NavLink } from 'react-router-dom';
import Avatar from '../../../profile/avatar';

function Nav() {
  return (
    <div className="navbar z-10">
      <div className="flex-1"></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="me-6">Register / Sign In</li>
          <NavLink to="/">
            <li className="me-6">Explore Venues</li>
          </NavLink>
          <li>
            <details>
              <summary>
                <Avatar/>
              </summary>
              <ul className="rounded-sm rounded-t-none flex flex-col border border-modal bg-primary">
                <NavLink to="/profile-page">
                  <li className="mt-2 py-2">Profile</li>
                </NavLink>
                <NavLink to="/admin-page">
                  <li className="mt-2 py-2">Admin venues</li>
                </NavLink>
                <li className="my-1 py-3">Sign out</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
