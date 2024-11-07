import { useState } from 'react';
import { API_KEY } from '../../constants';
import { useUserStore } from '../../stores/user-store';

export const useApi = (url) => {
  const { userData, setUserData } = useUserStore();
  const accessToken = userData?.data?.accessToken;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (method, body = null, save = false) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-Noroff-API-Key': `${API_KEY}`,
          ...(accessToken && { Authorization: `Bearer ${accessToken}` })
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
        setUserData(result);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const GET = (body) => request('GET', body);
  const POST = (body, save = false) => request('POST', body, save);
  const PUT = (body, save = false) => request('PUT', body, save);
  const PATCH = (body, save = false) => request('PATCH', body, save);
  const REMOVE = (save = false) => request('DELETE', null, save);

  return { data, error, loading, GET, POST, PUT, PATCH, REMOVE };
};

export default useApi;
