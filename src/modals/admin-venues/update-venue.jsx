import { useEffect } from 'react';
import Modal from '../../components/modal';
import UpdateVenueForm from '../../forms/update-venue';
import { editProfileImg } from '../../images';
import { useVenueStore } from '../../stores/venue-store';
import { useModalStore } from '../../stores/modal-store';

function UpdateVenueModal({ venueId }) {
  const profileVenues = useVenueStore((state) => state.profileVenues);
  const venueData = venueId ? profileVenues.find((venue) => venue.id === venueId) : null;

  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Modal
      id="update-venue-modal"
      header="Update Venue"
      modalImg={editProfileImg}
      form={
        <UpdateVenueForm venueData={venueData} onSubmit={() => closeModal('update-venue-modal')} />
      }
    />
  );
}

export default UpdateVenueModal;
