import UserProfile from '../../components/profile/profile-section/index';
import EditProfileModal from '../../modals/profile/edit-profile';
import BookingList from '../../components/profile/booking-list';
import { loadFromStorage } from '../../stores/local-storage';

function ProfilePage() {
  const userName = loadFromStorage('userProfile')?.name;

  return (
    <div className="flex flex-col items-center">
      <EditProfileModal />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex">
          <UserProfile />
        </div>
        <div className="fmt-12 sm:mx-2 text-center">
          <h1 className="font-header text-3xl sm:text-4xl mt-6 sm:mt-0">My future holidaze</h1>
          <p className="my-2">booked by</p>
          <p className="italic text-sm mb-12 sm:mb-16">{userName}</p>
          <div className="flex">
            <BookingList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
