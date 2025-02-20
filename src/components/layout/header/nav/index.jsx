import { NavLink } from 'react-router-dom';
import Avatar from '../avatar';
import { useUserStore } from '../../../../stores/user-store';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../../../../stores/modal-store';

function Nav() {
  const clearUser = useUserStore((state) => state.clearUser);
  const loggedIn = useUserStore((state) => state.isAuthenticated);
  const userProfile = useUserStore((state) => state.userProfile);
  const venueManager = userProfile?.venueManager || false;
  const openModal = useModalStore((state) => state.openModal);

  const logout = () => {
    clearUser();
    console.log('User logged out');
    navigate('/');
  };

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="flex-1"></div>
      <div className="flex-none w-full">
        <ul className="menu menu-horizontal w-full justify-end space-x-4 px-1">
          {!loggedIn && (
            <li
              className="hover:cursor-pointer hover:scale-105 duration-300 mt-4"
              onClick={() => openModal('sign-in-modal')}>
              Register / Sign In
            </li>
          )}
          <NavLink to="/">
            <li className="hover:scale-105 duration-300 mt-4">Explore Venues</li>
          </NavLink>
          {loggedIn && (
            <li className="relative">
              <details id="avatar-with-menu" className="group">
                <summary className="hover:scale-105 duration-300 cursor-pointer">
                  <Avatar />
                </summary>
                <ul className="absolute right-0 w-32 rounded-sm flex flex-col border border-modal bg-primary z-10">
                  <NavLink to="/profile-page">
                    <li className="mt-2 py-2 px-4 hover:scale-105 duration-300 hover:bg-overlayLight">
                      Profile
                    </li>
                  </NavLink>
                  {venueManager && (
                    <NavLink to="/admin-page">
                      <li className="mt-2 py-2 px-4 hover:scale-105 duration-300 hover:bg-overlayLight">
                        Admin venues
                      </li>
                    </NavLink>
                  )}
                  <li
                    onClick={() => {
                      logout();
                      console.log('User is logged out');
                      navigate('/');
                    }}
                    className="my-1 py-3 px-4 hover:scale-105 duration-300 hover:bg-overlayLight cursor-pointer">
                    Sign out
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
