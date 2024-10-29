import Logo from "../logo";
import Copyright from "./copyright";
import NavFooter from "./nav-footer";
import SoMeIcons from "./social-media";

function Footer() {
  return (
    <footer className="sticky footer footer-center">
        <hr className="mt-12 border-overlayLighter w-full"></hr>
  <aside>
    <Logo/>
    <NavFooter/>
  </aside>
    <div className="grid grid-flow-col gap-4">
    <SoMeIcons/>
    </div>
    <Copyright/>
</footer>
  );
}
export default Footer;
