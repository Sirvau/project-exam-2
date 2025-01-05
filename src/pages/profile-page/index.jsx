import UserProfile from '../../components/profile/profile-section/index';
import EditProfileModal from '../../modals/profile/edit-profile';
import BookingList from '../../components/profile/booking-list';
import { loadFromStorage } from '../../stores/local-storage';
import ToTopButton from '../../components/buttons/to-top-button';

function ProfilePage() {
  const userName = loadFromStorage('userProfile')?.name;

  return (
    <div className="flex flex-col items-center">
      <EditProfileModal />
      <section className="grid grid-cols-1 mx-10 sm:mx-32 md:mx-0 md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <UserProfile />
        </div>
        <div className="fmt-12 sm:mx-2 text-center mt-6 sm:mt-0">
          <h1 className="font-header text-3xl sm:text-4xl mt-6 ">My future holidaze</h1>
          <p className="my-2">booked by</p>
          <p className="italic text-sm mb-12 sm:mb-16">{userName}</p>
          <div className="flex items-center justify-center">
            <BookingList />
          </div>
          <div className="flex justify-center mt-36">
            <ToTopButton />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
