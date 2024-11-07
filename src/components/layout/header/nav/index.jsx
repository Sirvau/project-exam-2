import { NavLink } from 'react-router-dom';
import Avatar from '../../../profile/avatar';
import { useUserStore } from '../../../../stores/user-store';

function Nav() {
  const { removeUserData } = useUserStore();
  return (
    <div className="navbar">
      <div className="flex-1"></div>
      <div className="flex-none w-full">
        <ul className="menu menu-horizontal w-full justify-end space-x-4 px-1">
          <li
            className="hover:cursor-pointer hover:scale-105 duration-300 mt-4"
            onClick={() => document.getElementById('sign-in-modal').showModal()}>
            Register / Sign In
          </li>
          <NavLink to="/">
            <li className="hover:scale-105 duration-300 mt-4">Explore Venues</li>
          </NavLink>
          <li className="relative">
            <details className="group">
              <summary className="hover:scale-105 duration-300 cursor-pointer">
                <Avatar />
              </summary>
              <ul className="absolute right-0 w-32 rounded-sm flex flex-col border border-modal bg-primary z-10">
                <NavLink to="/profile-page">
                  <li className="mt-2 py-2 px-4 hover:scale-105 duration-300 hover:bg-overlayLight">
                    Profile
                  </li>
                </NavLink>
                <NavLink to="/admin-page">
                  <li className="mt-2 py-2 px-4 hover:scale-105 duration-300 hover:bg-overlayLight">
                    Admin venues
                  </li>
                </NavLink>
                <li
                  onClick={() => {
                    removeUserData();
                    window.location.href = '/';
                  }}
                  className="my-1 py-3 px-4 hover:scale-105 duration-300 hover:bg-overlayLight cursor-pointer">
                  Sign out
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
