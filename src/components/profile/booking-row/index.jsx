import TableRowTemplate from '../../table-row-template';

export function ProfileBookingRow() {
  return (
    <TableRowTemplate
      title="Booking Location"
      description="This is the location description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
      status="Booked"
      date=" 12.12.2024"
      persons={4}
      amount={3500}
    />
  );
}

export default ProfileBookingRow;
