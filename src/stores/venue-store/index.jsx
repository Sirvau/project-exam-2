import { create } from 'zustand';
import ApiManager from '../../api-manager/api-manager.js';

export const useVenueStore = create((set) => ({
  venues: [], // For storing all venues
  profileVenues: [], // For storing venues by profile
  loading: true,
  error: null,

  // Fetch all venues
  fetchVenues: async (owner = true, bookings = true) => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.getAllVenues({
        _owner: owner,
        _bookings: bookings
      });
      set({ venues: response.data, loading: false });
      console.log('All Venues:', response.data);
    } catch (err) {
      set({ error: err.message || 'Failed to fetch venues', loading: false });
    }
  },

  // Fetch venues by profile
  fetchProfileVenues: async (profileName) => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.VenuesByProfile(profileName);
      set({ profileVenues: response.data, loading: false });
      console.log(`Venues for profile (${profileName}):`, response.data);
    } catch (err) {
      set({ error: err.message || 'Failed to fetch profile venues', loading: false });
    }
  },

  // Update venue
  updateProfileVenue: (venueId, data) => {
    set((state) => {
      const index = state.profileVenues.findIndex((venue) => venue.id === venueId);
      state.profileVenues.splice(index, 1, data);
      return {
        profileVenues: state.profileVenues
      };
    });
  },

  // Remove profile venue
  removeProfileVenue: (venueId) => {
    set((state) => {
      const index = state.profileVenues.findIndex((venue) => venue.id === venueId);
      state.profileVenues.splice(index, 1);
      return {
        profileVenues: state.profileVenues
      };
    });
  }
}));

export default useVenueStore;
