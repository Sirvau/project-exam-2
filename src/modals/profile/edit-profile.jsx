import Modal from '../../components/modal';
import { editProfileImg } from '../../images';
import EditProfileForm from '../../forms/edit-profile';

function EditProfileModal() {
  return (
    <div className="">
      <Modal
        id="edit-profile-modal"
        className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative"
        header="Edit Profile"
        modalImg={editProfileImg}
        form={<EditProfileForm />}
      />
    </div>
  );
}
export default EditProfileModal;
