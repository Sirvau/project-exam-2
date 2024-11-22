import { create } from 'zustand';
import ApiManager from '../../api-manager/api-manager.js';

export const useVenueStore = create((set) => ({
  venues: [],
  loading: true,
  error: null,
  fetchVenues: async () => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.getAllVenues({
        _owner: true,
        _bookings: true
      });
      set({ venues: response.data, loading: false });
      console.log(response.data);
    } catch (err) {
      set({ error: err.message || 'Failed to fetch venues', loading: false });
    }
  }
}));

export default useVenueStore;
