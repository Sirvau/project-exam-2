import { useLocation } from 'react-router-dom';
import { pinIcon } from '../../icons';

function VenueInfo() {
  const location = useLocation();
  const venue = location.state?.venue;

  return (
    <div className="mb-1">
      <h1 className="font-header font-semibold text-3xl mt-6">{venue.name}</h1>
      <div className="flex items-center mt-2">
        {pinIcon}
        <p className="ms-2 italic text-sm">
          {' '}
          {venue.location.address ||
            venue.location.city ||
            venue.location.country ||
            'Secret Location'}
        </p>
      </div>
      <p className="mt-6">{venue.description}</p>
    </div>
  );
}
export default VenueInfo;
