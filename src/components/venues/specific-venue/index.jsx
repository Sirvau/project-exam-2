import { useLocation } from 'react-router-dom';
import ImageSlider from '../../image-slider';
import SingleImage from '../../single-image';
import VenueInfo from '../venue-info';
import { parking, wifi, breakfast, pets, checkTrue, xFalse } from '../../icons';
import DeviderLine from '../../devider-line';

function SpecificVenue() {
  const location = useLocation();
  const venue = location.state?.venue;

  if (!venue) {
    return <p>Venue not found</p>;
  }

  return (
    <div className="md:flex md:justify-center">
      <div className="venue-section">
        <div>
          {venue.media.length === 1 ? (
            <SingleImage image={venue.media[0]} />
          ) : (
            <ImageSlider images={venue.media} />
          )}
        </div>
        <div className="ms-6 md:ms-0">
          <VenueInfo />
        </div>
        <div className="flex flex-col ms-6 md:ms-0 w-64 mt-12">
          <h2 className="md:ms-0 font-header text-xl font-semibold tracking-wider mb-1">
            Facilities
          </h2>
          <DeviderLine />
        </div>
        <div className="ms-6 md:ms-0 flex gap-8 mt-2">
          <div className="flex items-center gap-2">
            <span>{wifi}</span>
            <span>{venue.meta.wifi ? checkTrue : xFalse}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{parking}</span>
            <span>{venue.meta.parking ? checkTrue : xFalse}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{breakfast}</span>
            <span>{venue.meta.breakfast ? checkTrue : xFalse}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{pets}</span>
            <span>{venue.meta.pets ? checkTrue : xFalse}</span>
          </div>
        </div>
      </div>
      <div className="booking-section ms-6 mt-12 md:mt-0">
        <div className="flex flex-col w-64">
          <h2 className="font-header text-xl font-semibold tracking-wider mb-1">Book venue</h2>
          <DeviderLine />
        </div>
        <div className="flex items-end mt-6 ">
          <div className="flex flex-col">
            <p className="text-base">Venue managed by:</p>
            <p className="italic tracking-wide text-sm mt-4">Creator Name</p>
          </div>
          <button className="btn btn-circle ms-4">Avatar</button>
        </div>
      </div>
    </div>
  );
}

export default SpecificVenue;
