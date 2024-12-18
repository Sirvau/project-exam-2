import ApiManager from '../../api-manager/api-manager';
import useVenueStore from '../../stores/venue-store';
import SmallModal from '../info/small-modal';

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
        <button onClick={deleteVenue}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </SmallModal>
    </div>
  );
}
export default DeleteVenueModal;
