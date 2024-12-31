import PropTypes from 'prop-types';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useUserStore from '../../stores/user-store';

function BookingCalendar({ bookings, onBookingSubmit }) {
  const loggedIn = useUserStore((state) => state.isAuthenticated);
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [guests, setGuests] = useState('');

  const bookedDates = bookings.map((booking) => ({
    start: new Date(booking.dateFrom),
    end: new Date(booking.dateTo)
  }));

  const isDateDisabled = (date) =>
    bookedDates.some(({ start, end }) => date >= start && date <= end);

  const handleBooking = () => {
    if (selectedRange[0] && selectedRange[1] && guests > 0) {
      onBookingSubmit({
        dateFrom: selectedRange[0],
        dateTo: selectedRange[1],
        guests: parseInt(guests, 10)
      });
    } else {
      alert('Please select a date range and enter the number of guests.');
    }
  };

  return (
    <div className="mt-4">
      <Calendar
        onChange={setSelectedRange}
        selectRange
        tileDisabled={({ date }) => isDateDisabled(date)}
        value={selectedRange}
        className="react-calendar text-primary"
      />
      {loggedIn && (
        <div className="my-6 text-center">
          <input
            id="guests"
            type="number"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Number of guests"
            className="rounded px-3 py-2 text-light bg-modal w-full"
          />

          <button
            className="bg-tBase text-primary px-8 py-2 rounded ml-2 mt-8"
            onClick={handleBooking}
            disabled={!selectedRange[0] || !selectedRange[1] || guests <= 0}>
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

BookingCalendar.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      dateFrom: PropTypes.string.isRequired,
      dateTo: PropTypes.string.isRequired
    })
  ).isRequired,
  onBookingSubmit: PropTypes.func.isRequired
};

export default BookingCalendar;
