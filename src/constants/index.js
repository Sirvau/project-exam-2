

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LOGIN = import.meta.env.VITE_API_LOGIN;
const REGISTER = import.meta.env.VITE_API_REGISTER;
const ALL_VENUES = import.meta.env.VITE_API_ALL_VENUES;
const EDIT_PROFILE = import.meta.env.VITE_API_EDIT_PROFILE;
const SINGLE_PROFILE = import.meta.env.VITE_API_SINGLE_PROFILE;

export const API_KEY = import.meta.env.VITE_API_KEY;
export const LOGIN_URL = `${BASE_URL}${LOGIN}`;
export const REGISTER_URL = `${BASE_URL}${REGISTER}`;
export const ALL_VENUES_URL = `${BASE_URL}${ALL_VENUES}`;
export const EDIT_PROFILE_URL = `${BASE_URL}${EDIT_PROFILE}`;



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

};

export default ENDPOINTS