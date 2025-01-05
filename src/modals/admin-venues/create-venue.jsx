import Modal from '../../components/modal';
import { createVenueImg } from '../../images';
import CreateVenueForm from '../../forms/create-venue';

function CreateVenueModal() {
  return (
    <div className="">
      <Modal
        id="create-venue-modal"
        className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative"
        header="Create Venue"
        modalImg={createVenueImg}
        form={<CreateVenueForm />}
      />
    </div>
  );
}
export default CreateVenueModal;
