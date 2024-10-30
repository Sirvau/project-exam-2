import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <div className="text-tBase mx-4 md:mx-20 max lg:mx-24 max">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
