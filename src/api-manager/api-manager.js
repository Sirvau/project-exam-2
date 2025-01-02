import { BASE_URL } from '../constants';
import ENDPOINTS from '../constants';
import ApiMethods from './api-methods';


class ApiManager {
  //Auth
  static register = (data) => {
    const url = BASE_URL + ENDPOINTS.REGISTER();
    return ApiMethods.post(url, data);
  };

  static login = async (data, params = {}, closeModalCallback) => {
    const url = new URL(BASE_URL + ENDPOINTS.LOGIN());
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
    return ApiMethods.post(url.toString(), data)
      .then((response) => {
        const { accessToken, name, email, bio, avatar, banner, venueManager } = response.data;
        if (!accessToken || !name) {
          throw new Error('Invalid login response');
        }
      
        if (closeModalCallback) closeModalCallback();
        return { accessToken, userProfile: { name, email, bio, avatar, banner, venueManager } };
      })
      .catch((err) => {
        console.error('Error during login:', err);
        throw err;
      });
  };

  //Venues
  static getAllVenues = (params = {}) => {
    const url = new URL(BASE_URL + ENDPOINTS.ALL_VENUES());
    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
    return ApiMethods.get(url.toString());
  };

  static VenuesByProfile = (name) => {
    const url = new URL(BASE_URL + ENDPOINTS.VENUES_BY_PROFILE(name));
    url.searchParams.append('_bookings', 'true'); 
    console.log('Requesting URL:', url.toString());
    return ApiMethods.get(url.toString());
  };
  

  static createVenue = async (data, closeModalCallback) => {
    const url = BASE_URL + ENDPOINTS.CREATE_VENUE();
  
    return ApiMethods.post(url.toString(), data)
      .then((response) => {
        if (!response) {
          throw new Error('Failed to create venue');
        }
        
        // Close the modal after a successful response
        if (closeModalCallback) closeModalCallback();
        
        return response.data;
      })
      .catch((err) => {
        console.error('Error creating venue:', err);
        throw err;
      });
  };
  

static updateVenue = async (id, data) => {
  const url = BASE_URL + ENDPOINTS.UPDATE_VENUE(id);
  return ApiMethods.put(url, data)
    .then((response) => {
      if (!response) {
        throw new Error('Failed to update venue');
      }
      return response.data;
    })
    .catch((err) => {
      console.error('Error updating venue:', err);
      throw err;
    });
};

static deleteVenue = async (id) => {
  const url = BASE_URL + ENDPOINTS.DELETE_VENUE(id);
  ApiMethods.delete(url)
    .catch((err) => {
      console.error('Error deleting venue:', err);
      throw err;
    });
};

//Bookings

static BookingsByProfile = (name) => {
  const url = new URL(BASE_URL + ENDPOINTS.BOOKINGS_BY_PROFILE(name));
  url.searchParams.append('_venue', 'true'); 
  url.searchParams.append('_customer', 'true');
  console.log('Requesting URL:', url.toString());
  return ApiMethods.get(url.toString());
};

static createBooking = async (data) => {
  const url = BASE_URL + ENDPOINTS.CREATE_BOOKING();
  return ApiMethods.post(url, data)
    .then((response) => {
      if (!response) {
        throw new Error('Failed to book venue');
      }
      return response.data;
    })
    .catch((err) => {
      console.error('Error booking venue:', err);
      throw err;
    });
};


  //Profile
static singleProfile = (name, params = { _bookings: true, _venues: true }) => {
  const url = new URL(`${BASE_URL}${ENDPOINTS.SINGLE_PROFILE(name)}`);

  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });

  console.log('Requesting URL:', url.toString());

  return ApiMethods.get(url.toString());
};

  static editProfile = (name, data) => {
    const url = `${BASE_URL}${ENDPOINTS.EDIT_PROFILE(name)}`;
    return ApiMethods.put(url, data);
  };
}

export default ApiManager;
