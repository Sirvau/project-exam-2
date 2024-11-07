import UserProfile from '../../components/profile/profile-section';
import EditProfileModal from '../../modals/profile/edit-profile';

function ProfilePage() {
  return (
    <div>
      <EditProfileModal />
      <div className="sm:mx-28 md:mx-0 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <UserProfile />
      </div>
    </div>
  );
}
export default ProfilePage;
