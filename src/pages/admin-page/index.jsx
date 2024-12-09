import { useState } from 'react';
import FocusButton from '../../components/buttons/focus-button';
import { addIcon } from '../../components/icons';
import MyVenueList from '../../components/venue-manager';
import CreateVenueModal from '../../modals/admin-venues/create-venue';
import UpdateVenueModal from '../../modals/admin-venues/update-venue';
import { loadFromStorage } from '../../stores/local-storage';

function AdminPage() {
  const userName = loadFromStorage('userProfile')?.name;
  const [selectedVenueId, setSelectedVenueId] = useState(null);

  const handleEditVenue = (venueId) => {
    setSelectedVenueId(venueId);
    document.getElementById('update-venue-modal').showModal();
  };

  return (
    <div>
      <CreateVenueModal />
      <div className="flex flex-col items-center mt-20 sm:mx-2 text-center">
        <h1 className="font-header text-3xl sm:text-4xl mt-6 sm:mt-0">Administrate Venues</h1>
        <p className="my-2">Created by</p>
        <p className="italic text-md mb-12 sm:mb-16">{userName}</p>
        <div className="mb-12">
          <FocusButton
            buttonText="New Venue"
            icon={addIcon}
            onClick={() => document.getElementById('create-venue-modal').showModal()}
          />
        </div>
        <UpdateVenueModal venueId={selectedVenueId} />
        <MyVenueList onEditVenue={handleEditVenue} />
      </div>
    </div>
  );
}

export default AdminPage;
