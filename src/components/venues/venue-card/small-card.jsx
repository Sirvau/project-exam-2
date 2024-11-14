import VenueCardTemplate from './card-template';
import PropTypes from 'prop-types';

function SmallVenueCard({ className = '', venue }) {
  return <VenueCardTemplate className={` ${className}`} venue={venue} />;
}

SmallVenueCard.propTypes = {
  className: PropTypes.string,
  venue: PropTypes.object.isRequired
};

export default SmallVenueCard;
