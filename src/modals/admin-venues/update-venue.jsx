import { useEffect, useState } from 'react';
import Modal from '../../components/modal';
import UpdateVenueForm from '../../forms/update-venue';
import { editProfileImg } from '../../images';
import { useVenueStore } from '../../stores/venue-store';

function UpdateVenueModal({ venueId }) {
  const [showModal, setShowModal] = useState(false);
  const profileVenues = useVenueStore((state) => state.profileVenues);
  const venueData = venueId ? profileVenues.find((venue) => venue.id === venueId) : null;

  useEffect(() => {
    if (venueId) {
      setShowModal(true);
    }
  }, [venueId]);

  return (
    <Modal
      id="update-venue-modal"
      header="Update Venue"
      modalImg={editProfileImg}
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      form={<UpdateVenueForm venueData={venueData} />}
    />
  );
}

export default UpdateVenueModal;
