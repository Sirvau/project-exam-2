import FocusButton from '../../components/buttons/focus-button';
import { addIcon } from '../../components/icons';
import VenueList from '../../components/venue-manager/my-venues/venue-list';

function AdminPage() {
  return (
    <div>
      <div className="flex flex-col items-center mt-20 sm:mx-2 text-center">
        <h1 className="font-header text-3xl sm:text-4xl mt-6 sm:mt-0">Administrate Venues</h1>
        <p className="my-2">Created by</p>
        <p className="italic text-sm mb-12 sm:mb-16">Venue Managers Name</p>
        <div className="mb-12">
          <FocusButton buttonText="New Venue" icon={addIcon} />
        </div>
        <VenueList />
      </div>
    </div>
  );
}
export default AdminPage;
