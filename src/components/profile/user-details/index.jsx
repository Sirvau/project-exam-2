import { useEffect, useState } from 'react';
import ApiManager from '../../../api-manager/api-manager';
import { loadFromStorage } from '../../../stores/local-storage';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userName = loadFromStorage('userProfile')?.name;

    if (!userName) {
      setError('No user found in local storage.');
      setLoading(false);
      return;
    }

    ApiManager.singleProfile(userName)
      .then((data) => {
        if (data?.data) {
          setUserData(data.data);
        } else {
          throw new Error('Invalid response data');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(`Failed to fetch user profile: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const {
    name = 'No name available',
    avatar = {},
    banner = {},
    bio = 'No bio available',
    venueManager = false
  } = userData || {};

  return (
    <div className="text-center relative flex flex-col items-center">
      <div className="w-full h-40 sm:h-56 bg-cover bg-center brightness-75">
        <img
          src={banner.url || 'default-banner-url'}
          alt={banner.alt || 'No banner description'}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="absolute top-20 sm:top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:h-32 sm:w-32 md:h-36 md:w-36">
        <img
          src={avatar.url || 'default-avatar-url'}
          alt={avatar.alt || 'No avatar description'}
          className="w-full h-full object-cover rounded-full drop-shadow-xl brightness-95"
        />
      </div>
      <p className="font-header text-2xl mt-6">{name}</p>
      <p className="mt-2 text-sm italic">Role: {venueManager ? 'Venue Manager' : 'Customer'}</p>
      <p className="font-base text-sm mt-8 mb-6 text-left mx-8 sm:mx-4 tracking-wide">{bio}</p>
    </div>
  );
};

export default UserDetails;
