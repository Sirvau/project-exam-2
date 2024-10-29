import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


function Layout() {
  return (
    <div className="md:mx-20 max lg:mx-24 max font-primary text-dark-brown">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
