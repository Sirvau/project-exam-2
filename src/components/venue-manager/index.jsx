import SubtileButton from '../buttons/subtile-button';
import { cheveonDownIcon } from '../icons';
import MyVenuesTableRow from './my-venues-table-row';

function MyVenueList() {
  return (
    <section>
      <MyVenuesTableRow />
      <div className="flex justify-end mt-12">
        <SubtileButton buttonText="More venues" icon={cheveonDownIcon} />
      </div>
    </section>
  );
}

export default MyVenueList;
