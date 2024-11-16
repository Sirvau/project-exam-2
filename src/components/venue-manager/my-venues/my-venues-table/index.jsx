import TableRowTemplate from '../../../table-row-template';
import { locationPlaceholderImg } from '../../../../images';

export function MyVenueTableRow() {
  return (
    <TableRowTemplate
      img={locationPlaceholderImg}
      title="Venue Location"
      description="This is the location description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam."
      status="Booked"
      date=" 15.02.2025"
      persons={6}
      amount={5800}
      onEdit={() => console.log('Edit button clicked')} // Placeholder function
      onDelete={() => console.log('Delete button clicked')} // Placeholder function
    />
  );
}

export default MyVenueTableRow;
