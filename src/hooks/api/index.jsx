import { useState, useCallback } from 'react';
import { API_KEY } from '../../constants';
import { useUserStore } from '../../stores/user-store';

export const useApi = (url) => {
  const { userData, setUserData } = useUserStore();
  const accessToken = userData?.data?.accessToken;
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (method, body = null, save = false) => {
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
        setData(result.data);

        if (save) {
          setUserData(result);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [url, accessToken, setUserData]
  );

  const GET = useCallback((body) => request('GET', body), [request]);
  const POST = useCallback((body, save = false) => request('POST', body, save), [request]);
  const PUT = useCallback((body, save = false) => request('PUT', body, save), [request]);
  const PATCH = useCallback((body, save = false) => request('PATCH', body, save), [request]);
  const REMOVE = useCallback((save = false) => request('DELETE', null, save), [request]);

  return { data, error, loading, GET, POST, PUT, PATCH, REMOVE };
};

export default useApi;
