import Nav from './nav';
import Logo from '../logo';

function Header() {
  return (
    <div id="header" className="mb-12">
      <Nav />
      <Logo />
      <hr className="mt-12 border-overlayLighter"></hr>
    </div>
  );
}
export default Header;
