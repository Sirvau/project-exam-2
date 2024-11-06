import { useState } from 'react';
import { API_KEY } from '../../constants';
import { saveToStorage } from '../../stores/local-storage';

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (method, body = null, save = false, storageKey = null) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-Noroff-API-Key': `${API_KEY}`
        },
        body: body ? JSON.stringify(body) : null
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);

      if (save) {
        saveToStorage(storageKey, result);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const GET = (body, save = false, storageKey) => request('GET', body, save, storageKey);
  const POST = (body, save = false, storageKey) => request('POST', body, save, storageKey);
  const PUT = (body, save = false, storageKey) => request('PUT', body, save, storageKey);
  const PATCH = (body, save = false, storageKey) => request('PATCH', body, save, storageKey);
  const REMOVE = (save = false, storageKey) => request('DELETE', null, save, storageKey);

  return { data, error, loading, GET, POST, PUT, PATCH, REMOVE };
};

export default useApi;
