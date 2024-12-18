import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { starIcon, personIcon, pinIcon, pets, breakfast, parking, wifi } from '../../icons';

const SmallVenueCard = ({ venue }) => {
  const defaultImg =
    'https://images.unsplash.com/photo-1621968859049-d09c5f0f86eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const venueImageUrl =
    venue.media && venue.media.length > 0 && venue.media[0].url ? venue.media[0].url : defaultImg;

  return (
    <Link
      to={`/specific-venue/${venue.id}`}
      state={{ venue }}
      className="border border-modal rounded-sm shadow-md p-4 bg-modal hover:bg-primary hover:scale-95 hover:duration-500 mt-2">
      {/* Venue Image */}
      <div className="brightness-90 hover:brightness-105 hover:duration-500 h-48 overflow-hidden">
        <img
          src={venueImageUrl}
          alt={venue.media && venue.media[0]?.alt ? venue.media[0].alt : 'Default Venue Image'}
          className="w-full h-full object-cover rounded opacity-90 hover:opacity-100"
        />
      </div>

      {/* Venue Name and Rating */}
      <div className="flex justify-between mt-4">
        <h3 className="font-header font-semibold text-xl mt-2 ms-4 truncate">{venue.name}</h3>
        {venue.rating ? (
          <div className="flex items-center justify-start py-1 px-4 opacity-90 rounded-es-sm">
            <div className="flex items-center">
              {starIcon}
              <p className="ms-2">{venue.rating}</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Location */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center ms-4">
          {pinIcon}
          <p className="text-sm ms-2 italic tracking-wider">
            {venue.location.address ||
              venue.location.city ||
              venue.location.country ||
              'Secret Location'}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-row items-end justify-start ms-4 gap-2 mt-6">
        <p className="text-base font-medium mt-2">Price per night:</p>
        <p className="font-semibold text-sm">{venue.price} NOK ,-</p>
      </div>

      {/* Amenities */}
      <div className="flex justify-start flex-wrap my-4 gap-2">
        {venue.meta.wifi && <span className="badge text-tBase bg-modal border-0 py-4">{wifi}</span>}
        {venue.meta.breakfast && (
          <span className="badge text-tBase bg-modal border-0 py-4">{breakfast}</span>
        )}
        {venue.meta.parking && (
          <span className="badge text-tBase bg-modal border-0 py-4">{parking}</span>
        )}
        {venue.meta.pets && <span className="badge text-tBase bg-modal border-0 py-4">{pets}</span>}
        <div className="flex items-center badge text-tBase bg-modal border-0 py-4">
          {personIcon}
          <p className="ms-1 me-1">{venue.maxGuests || 0}</p>
        </div>
      </div>
    </Link>
  );
};

// Props Validation
SmallVenueCard.propTypes = {
  venue: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    ),
    rating: PropTypes.number,
    location: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string
    }),
    maxGuests: PropTypes.number,
    meta: PropTypes.shape({
      wifi: PropTypes.bool,
      parking: PropTypes.bool,
      breakfast: PropTypes.bool,
      pets: PropTypes.bool
    }),
    price: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired
};

export default SmallVenueCard;
