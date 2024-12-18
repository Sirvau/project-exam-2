import Modal from '../../components/modal';
import { createVenueImg } from '../../images';
import CreateVenueForm from '../../forms/create-venue';

function CreateVenueModal() {
  return (
    <div className="">
      <Modal
        id="create-venue-modal"
        header="Create Venue"
        modalImg={createVenueImg}
        form={<CreateVenueForm />}
      />
    </div>
  );
}
export default CreateVenueModal;
