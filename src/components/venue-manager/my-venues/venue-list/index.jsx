import MyVenueTableRow from '../my-venues-table';
import SubtileButton from '../../../buttons/subtile-button';
import { cheveonDownIcon } from '../../../icons';

function VenueList() {
  return (
    <section>
      <MyVenueTableRow />
      <MyVenueTableRow />
      <div className="flex justify-end mt-12">
        <SubtileButton buttonText="More venues" icon={cheveonDownIcon} />
      </div>
    </section>
  );
}

export default VenueList;
