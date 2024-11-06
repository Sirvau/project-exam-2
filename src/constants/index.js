const BASE_URL= import.meta.env.VITE_API_BASE_URL;
const LOGIN= import.meta.env.VITE_API_LOGIN;
const REGISTER= import.meta.env.VITE_API_REGISTER
const ALL_VENUES= import.meta.env.VITE_API_ALL_VENUES

export const API_KEY = import.meta.env.VITE_API_KEY
export const LOGIN_URL= `${BASE_URL}${LOGIN}`
export const REGISTER_URL = `${BASE_URL}${REGISTER}`
export const ALL_VENUES_URL = `${BASE_URL}${ALL_VENUES}`