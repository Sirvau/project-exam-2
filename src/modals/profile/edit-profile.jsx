import Modal from '../../components/modal';
import { editProfileImg } from '../../images';
import EditProfileForm from '../../forms/edit-profile';

function EditProfileModal() {
  return (
    <div className="">
      <Modal
        id="edit-profile-modal"
        header="Edit Profile"
        modalImg={editProfileImg}
        form={<EditProfileForm />}
      />
    </div>
  );
}
export default EditProfileModal;
