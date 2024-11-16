import { useEffect } from 'react';
import { useUserStore } from '../../../stores/user-store';
import UserDetails from '../profile-info';
import SubtileButton from '../../buttons/subtile-button';
import { editProfileIcon } from '../../icons';

function UserProfile() {
  const { userData, loadUserData } = useUserStore();

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  if (!userData) return <p>Loading user data...</p>;

  const {
    name = 'No name available',
    email = 'No email available',
    avatar = {},
    banner = {},
    bio = 'No bio available',
    venueManager = false
  } = userData?.data || {};

  return (
    <div className="relative bg-overlayLight rounded-b-md">
      <UserDetails
        userName={name}
        userEmail={email}
        userAvatar={avatar.url || 'default-avatar-url'}
        avatarAlt={avatar.alt || 'No avatar description'}
        userBanner={banner.url || 'default-banner-url'}
        bannerAlt={banner.alt || 'No banner description'}
        bio={bio}
        venueManager={venueManager}
      />
      <div className="flex justify-center pb-6 mb-1">
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
