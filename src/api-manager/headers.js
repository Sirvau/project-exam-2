import useUserStore from '../stores/user-store';
import { loadFromStorage } from '../stores/local-storage';
import { API_KEY } from '../constants';


 export const getHeaders = () => {
    const accessToken = useUserStore.getState().accessToken ||  loadFromStorage('accessToken'); 
    const apiKey = API_KEY;  
  
    const headers = {
      'Content-Type': 'application/json',
      'X-Noroff-API-Key': apiKey,  
    };
  
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`; 
    } else {
      console.warn('Access token not found!');
    }
  
    return headers;
  };
  
export default getHeaders