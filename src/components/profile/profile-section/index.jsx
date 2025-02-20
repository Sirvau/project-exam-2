import UserDetails from '../user-details/index';
import SubtileButton from '../../buttons/subtile-button';
import { editProfileIcon } from '../../icons';

function UserProfile() {
  return (
    <div className=" relative bg-overlayLight rounded-b-md max-h-screen">
      <UserDetails />
      <div className="flex justify-center pb-6 mb-1 mt-8">
        <SubtileButton
          buttonText="Edit Profile"
          icon={editProfileIcon}
          onClick={() => document.getElementById('edit-profile-modal').showModal()}
        />
      </div>
    </div>
  );
}

export default UserProfile;
