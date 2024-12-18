export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LOGIN = '/auth/login';
const REGISTER = '/auth/register';
const ALL_VENUES = '/holidaze/venues';
const EDIT_PROFILE = '/holidaze/profiles';
const SINGLE_PROFILE = '/holidaze/profiles';
const CREATE_BOOKING = '/holidaze/bookings';



const ENDPOINTS = {
    REGISTER: () => `${REGISTER}`,
    LOGIN: () => `${LOGIN}`,
    SINGLE_PROFILE: (name) => `${SINGLE_PROFILE}/${name}`,
    EDIT_PROFILE: (name) => `${EDIT_PROFILE}/${name}`,
    ALL_VENUES: () => `${ALL_VENUES}`,
    CREATE_VENUE: () => `${ALL_VENUES}`,
    UPDATE_VENUE: (id) => `${ALL_VENUES}/${id}`,
    DELETE_VENUE: (id) => `${ALL_VENUES}/${id}`,
    VENUES_BY_PROFILE: (name) => `${SINGLE_PROFILE}/${name}/venues`,
    BOOKINGS_BY_PROFILE: (name) => `${SINGLE_PROFILE}/${name}/bookings`,
    CREATE_BOOKING: () => `${CREATE_BOOKING}`
};

export default ENDPOINTS