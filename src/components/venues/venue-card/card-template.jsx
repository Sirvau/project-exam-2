import { Link } from 'react-router-dom';
import { starIcon, personIcon, pinIcon } from '../../icons';
import PropTypes from 'prop-types';

function VenueCardTemplate({ className = '', venue }) {
  const defaultImg =
    'https://images.unsplash.com/photo-1621968859049-d09c5f0f86eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const venueImageUrl =
    venue.media && venue.media.length > 0 && venue.media[0].url ? venue.media[0].url : defaultImg;

  return (
    <Link
      to={`/specific-venue/${venue.id}`}
      state={{ venue }}
      className={`border border-modal rounded-sm shadow-md p-4 hover:bg-modal hover:scale-95 hover:duration-500 ${className}`}>
      <div className="brightness-90 hover:brightness-105 hover:duration-500 h-40 overflow-hidden">
        <img
          src={venueImageUrl}
          alt={venue.media && venue.media[0] ? venue.media[0].alt : 'Default Venue Image'}
          className="w-full h-full object-cover rounded opacity-90 hover:opacity-100"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="font-header font-semibold mt-2 ms-4 truncate">{venue.name}</h3>
        {venue.rating ? (
          <div className="flex items-center justify-start py-1 px-4 opacity-90 rounded-es-sm">
            <div className="flex items-center">
              {starIcon}
              <p className="ms-2">{venue.rating}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center ms-4">
          {pinIcon}
          <p className="text-sm ms-2">
            {venue.location.address ||
              venue.location.city ||
              venue.location.country ||
              'Secret Location'}
          </p>
        </div>
        <div className="flex items-center me-4">
          {personIcon}
          <p className="ms-2 me-1">{venue.maxGuests || 0}</p>
        </div>
      </div>
    </Link>
  );
}

VenueCardTemplate.propTypes = {
  className: PropTypes.string,
  venue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    ),
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    location: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string
    }),
    maxGuests: PropTypes.number
  }).isRequired
};

export default VenueCardTemplate;
