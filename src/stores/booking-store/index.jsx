import { create } from 'zustand';
import ApiManager from '../../api-manager/api-manager.js';

export const useBookingsStore = create((set) => ({
  bookingsByProfile: [],
  loading: true,
  error: null,

  fetchProfileBookings: async (profileName) => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.BookingsByProfile(profileName);
      set({ bookingsByProfile: response.data, loading: false });
      console.log(`Bookings for profile (${profileName}):`, response.data);
    } catch (err) {
      set({ error: err.message || 'Failed to fetch profile venues', loading: false });
    }
  }
}));

export default useBookingsStore;
