import { useEffect } from 'react';
import { loadFromStorage } from '../../../stores/local-storage';
import TableRowTemplate from '../../table-row-template';
import useBookingsStore from '../../../stores/booking-store';
import Loader from '../../animations';
import FocusButton from '../../buttons/focus-button';
import { Link } from 'react-router-dom';

const BookingList = () => {
  const { fetchProfileBookings, bookingsByProfile, loading, error } = useBookingsStore();
  const profileName = loadFromStorage('userProfile')?.name;

  useEffect(() => {
    if (profileName) {
      fetchProfileBookings(profileName);
    }
  }, [profileName, fetchProfileBookings]);

  if (!profileName) return <div>No profile selected.</div>;
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {bookingsByProfile && bookingsByProfile.length > 0 ? (
        bookingsByProfile.map((booking) => {
          const isBooked = booking.dateFrom && booking.dateTo;
          const status = isBooked ? 'Booked' : 'Available';
          const date = isBooked
            ? `From: ${new Date(booking.dateFrom).toLocaleDateString()} To: ${new Date(booking.dateTo).toLocaleDateString()}`
            : '';

          return (
            <TableRowTemplate
              key={booking.id}
              media={booking.venue.media?.[0]?.url || 'https://via.placeholder.com/150'}
              title={booking.venue.name}
              description={booking.venue.description || 'No description available'}
              status={status}
              date={date}
              persons={booking.guests || 0}
              amount={booking.venue.price || 0}
            />
          );
        })
      ) : (
        <p className="text-center">
          You have not created any bookings yet...{' '}
          <Link to="/">
            <FocusButton buttonText="Explore Venues" />
          </Link>
        </p>
      )}
    </div>
  );
};

export default BookingList;
