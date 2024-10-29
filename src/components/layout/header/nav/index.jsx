

function Nav() {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Explore Venues</a></li>
            <li><a>Register / Sign In</a></li>
            <li>
              <details>
                <summary>Avatar-img when logged in</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>My profile</a></li>
                  <li><a>Admin venues</a></li>
                  <li><a>Log out</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  export default Nav;

