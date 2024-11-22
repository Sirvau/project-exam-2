import { getHeaders } from "./headers";
  
  
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
