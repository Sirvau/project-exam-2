import { Route, Routes } from 'react-router-dom';

import Layout from '../components/layout';
import HomePage from '../pages/home';
import AdminPage from '../pages/admin-page';
import ProfilePage from '../pages/profile-page';
import RouteNotFoundPage from '../pages/route-not-found';
import SpecificVenuePage from '../pages/specific-venue';

function RoutePaths() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="admin-page" element={<AdminPage />} />
          <Route path="specific-venue/:id" element={<SpecificVenuePage />} />
          <Route path="profile-page" element={<ProfilePage />} />
          <Route path="*" element={<RouteNotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RoutePaths;
