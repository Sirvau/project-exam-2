import { BASE_URL } from '../constants';
import ENDPOINTS from '../constants';
import ApiMethods from './api-methods';


/**
 * API Manager class to handle communication with the backend for various endpoints.
 */
class ApiManager {

 
  static getAllVenues = (params = {}) => {
    const url = new URL(BASE_URL + ENDPOINTS.ALL_VENUES());

    // Appending query parameters to the URL
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    return ApiMethods.get(url.toString());
  };

   /**
   * Registers a new user.
   */
   static register = (data) => {
    const url = BASE_URL + ENDPOINTS.REGISTER(); 

    return ApiMethods.post(url, data); 
  };


 /**
   * Login user.
   */
 static login = async (data, params = {}) => {
  const url = new URL(BASE_URL + ENDPOINTS.LOGIN());

  // Appending query parameters to the URL
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });

  return ApiMethods.post(url.toString(), data)
    .then((response) => {
      const accessToken = response.data.accessToken;
      const userProfile = {
        name: response.data.name,
        email: response.data.email,
        bio: response.data.bio,
        avatar: response.data.avatar,
        banner: response.data.banner,
        venueManager: response.data.venueManager,
      };

      if (!accessToken || !userProfile) {
        throw new Error('Invalid login response format');
      }

      return { accessToken, userProfile };
    })
    .catch((err) => {
      console.error('Error during login:', err);
      throw err;
    });
};


// In ApiManager.js
static singleProfile = (name) => {
  const url = `${BASE_URL}${ENDPOINTS.SINGLE_PROFILE(name)}`;
  console.log('Requesting URL:', url); 
  return ApiMethods.get(url);
};

static editProfile = (name, data) => {
  const url = `${BASE_URL}${ENDPOINTS.EDIT_PROFILE(name)}`;
  return ApiMethods.put(url, data);
};




}

export default ApiManager;
