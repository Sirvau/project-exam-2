import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingCalendar({ bookings, onBookingSubmit }) {
  const [selectedRange, setSelectedRange] = useState([null, null]);

  const bookedDates = bookings.map((booking) => ({
    start: new Date(booking.dateFrom),
    end: new Date(booking.dateTo)
  }));

  const isDateDisabled = (date) =>
    bookedDates.some(({ start, end }) => date >= start && date <= end);

  const handleBooking = () => {
    if (selectedRange[0] && selectedRange[1]) {
      onBookingSubmit(selectedRange);
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
      <div className="my-6 text-center">
        <button
          className="bg-tBase text-primary px-4 py-2 rounded"
          onClick={handleBooking}
          disabled={!selectedRange[0] || !selectedRange[1]}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookingCalendar;
