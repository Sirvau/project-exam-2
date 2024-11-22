
import { loadFromStorage } from '../stores/local-storage';
import useUserStore from '../stores/user-store';
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
  
  
  
  
  class ApiMethods {
    static apiRequest(method, url, body = {}, requireHeaders = true) {

      const options = {
        method,
        headers: requireHeaders ? getHeaders() : {},
      };
  
      if (method !== 'GET' && method !== 'HEAD') {
        options.body = JSON.stringify(body); 
      }
  
      return new Promise((resolve, reject) => {
        fetch(url, options)
          .then((res) => res.json())
          .then(resolve)
          .catch(reject);
      });
    }
  
    static get(url, requireHeaders = true) {
      return this.apiRequest('GET', url, null, requireHeaders);
    }
  
    static post(url, data, requireHeaders = true) {
      return this.apiRequest('POST', url, data, requireHeaders);
    }
  
    static put(url, data, requireHeaders = true) {
      return this.apiRequest('PUT', url, data, requireHeaders);
    }
  
    static delete(url, requireHeaders = true) {
      return this.apiRequest('DELETE', url, null, requireHeaders);
    }
  }
  

export default ApiMethods;
