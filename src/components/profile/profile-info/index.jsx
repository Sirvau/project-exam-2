import useUserStore from '../../../stores/user-store';

export function UserDetails() {
  const { userData } = useUserStore();

  if (!userData) return <p>No user data available.</p>;

  const {
    name = 'No name available',
    avatar = {},
    banner = {},
    bio = 'No bio available',
    venueManager = false
  } = userData?.data || {};

  return (
    <div className="text-center relative">
      {/* Banner Image */}
      <div className="w-full h-40 bg-cover bg-center brightness-75">
        <img
          src={banner.url || 'default-banner-url'}
          alt={banner.alt || 'No banner description'}
          className="w-full h-full object-cover rounded-t-md "
        />
      </div>

      {/* Avatar Image */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28">
        <img
          src={avatar.url || 'default-avatar-url'}
          alt={avatar.alt || 'No avatar description'}
          className="w-full h-full object-cover rounded-full drop-shadow-xl brightness-95"
        />
      </div>

      {/* User Info */}
      <p className="font-header text-2xl mt-4">{name}</p>
      <p className="mt-2 text-sm italic">Role: {venueManager ? 'Venue Manager' : 'Customer'}</p>
      <p className="font-base text-sm mt-4 text-left mx-8 tracking-wide">{bio}</p>
    </div>
  );
}

export default UserDetails;
