import PropTypes from 'prop-types';
import ApiManager from '../../api-manager/api-manager';
import useVenueStore from '../../stores/venue-store';
import SmallModal from '../info/small-modal';
import FocusButton from '../../components/buttons/focus-button';
import SubtileButton from '../../components/buttons/subtile-button';

function DeleteVenueModal({ venueId, onCancel, onConfirm }) {
  const { removeProfileVenue } = useVenueStore();

  async function deleteVenue() {
    try {
      await ApiManager.deleteVenue(venueId);
      removeProfileVenue(venueId);
      onConfirm();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="">
      <SmallModal isOpen={!!venueId}>
        <p className="tracking-wide">Are you sure you want to delete venue?</p>
        <div className="flex items-center justify-center gap-2">
          <FocusButton buttonText="Confirm" onClick={deleteVenue} />
          <SubtileButton buttonText="Cancel" onClick={onCancel} />
        </div>
      </SmallModal>
    </div>
  );
}

DeleteVenueModal.propTypes = {
  venueId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteVenueModal;
