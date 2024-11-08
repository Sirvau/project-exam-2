import UserProfile from '../../components/profile/profile-section';
import EditProfileModal from '../../modals/profile/edit-profile';
import TableTemplate from '../../components/table';

function ProfilePage() {
  return (
    <div className="flex flex-col items-center">
      <EditProfileModal />
      <section className="flex flex-col sm:flex-row items-center sm:items-start mt-6">
        <div className="w-2/3 sm:w-2/3 md:w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 sm:me-6">
          <UserProfile />
        </div>
        <div className="flex flex-col items-center mt-12 sm:mx-2 text-center">
          <h1 className="font-header text-3xl sm:text-4xl mt-6 sm:mt-0">My future holidaze</h1>
          <p className="my-2">booked by</p>
          <p className="italic text-sm mb-12 sm:mb-16">Profile name</p>
          <TableTemplate />
          <TableTemplate />
          <TableTemplate />
          <TableTemplate />
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
