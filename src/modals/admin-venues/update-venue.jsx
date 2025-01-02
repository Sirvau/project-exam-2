import PropTypes from 'prop-types';
import Modal from '../../components/modal';
import UpdateVenueForm from '../../forms/update-venue';
import { useVenueStore } from '../../stores/venue-store';
import { useModalStore } from '../../stores/modal-store';
import { createVenueImg } from '../../images';

function UpdateVenueModal({ venueId }) {
  const closeModal = useModalStore((state) => state.closeModal);
  const profileVenues = useVenueStore((state) => state.profileVenues);
  const venueData = venueId ? profileVenues.find((venue) => venue.id === venueId) : null;

  const venueMedia = venueData?.media?.length
    ? venueData.media.map((venueImage) => (
        <img
          key={venueId}
          src={venueImage.url || `${createVenueImg}`}
          alt={venueImage.alt}
          className="w-full h-full object-cover mb-2"
        />
      ))
    : [<div key={venueId}>{createVenueImg}</div>];

  return (
    <Modal
      id="update-venue-modal"
      className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative"
      header="Update Venue"
      modalImg={venueMedia}
      form={
        <UpdateVenueForm venueData={venueData} onSubmit={() => closeModal('update-venue-modal')} />
      }
    />
  );
}

UpdateVenueModal.propTypes = {
  venueId: PropTypes.string
};

export default UpdateVenueModal;
