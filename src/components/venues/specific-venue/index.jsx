import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVenueStore } from '../../../stores/venue-store';
import ImageSlider from '../../image-slider';
import SingleImage from '../../single-image';
import { pinIcon, starIcon, parking, wifi, breakfast, pets, checkTrue, xFalse } from '../../icons';
import DeviderLine from '../../devider-line';

function SpecificVenue() {
  const { id } = useParams();
  const { venues, loading, error, fetchVenues } = useVenueStore();

  useEffect(() => {
    if (venues.length === 0) {
      fetchVenues();
    }
  }, [venues.length, fetchVenues]);

  if (loading) return <p>Loading venue details...</p>;
  if (error) return <p>{error}</p>;

  const venue = venues.find((venue) => venue.id === id);

  if (!venue) return <p>Venue not found.</p>;

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
          <div className="mb-1">
            <div className="flex items-end ">
              <h1 className="font-header font-semibold text-3xl mt-6">{venue.name}</h1>
              {venue.rating ? (
                <div className="flex items-center justify-start py-1 px-4 opacity-90">
                  <div className="flex items-center">
                    {starIcon}
                    <p className="ms-2">{venue.rating}</p>
                  </div>
                </div>
              ) : null}
            </div>
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
          {/* Bookings */}
          {venue.bookings && venue.bookings.length > 0 && (
            <div className="mb-6 mt-12">
              <ul className="space-y-1">
                {venue.bookings.map((booking) => (
                  <li key={booking.id}>
                    From: {new Date(booking.dateFrom).toLocaleDateString()} - To:{' '}
                    {new Date(booking.dateTo).toLocaleDateString()} ({booking.guests} guests)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-end mt-6 ">
          <div className="flex flex-col">
            <p className="text-base">Venue managed by:</p>
            <p className="italic tracking-wide text-sm mt-4">{venue.owner.name}</p>
          </div>
          <div className="flex items-center">
            <img
              src={venue.owner.avatar.url}
              alt="Owner Avatar"
              className="w-12 h-12 border-0 rounded-full ms-4 object-cover brightness-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificVenue;
