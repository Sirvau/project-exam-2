import { create } from 'zustand';
import ApiManager from '../../api-manager/api-manager.js';

export const useVenueStore = create((set) => ({
  venues: [],
  profileVenues: [],
  loading: true,
  error: null,

  fetchVenues: async (
    owner = true,
    bookings = true,
    page = 1,
    limit = 12,
    sort = 'created',
    sortOrder = 'asc'
  ) => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.getAllVenues({
        _owner: owner,
        _bookings: bookings,
        page,
        limit,
        sort,
        sortOrder
      });
      set({ venues: response.data, loading: false });
      return response;
    } catch (err) {
      set({ error: err.message || 'Failed to fetch venues', loading: false });
      throw err;
    }
  },
  fetchProfileVenues: async (profileName) => {
    set({ loading: true, error: null });
    try {
      const response = await ApiManager.VenuesByProfile(profileName);
      set({ profileVenues: response.data, loading: false });
    } catch (err) {
      set({ error: err.message || 'Failed to fetch profile venues', loading: false });
    }
  },

  addProfileVenue: (newVenue) => {
    set((state) => ({
      profileVenues: [newVenue, ...state.profileVenues]
    }));
  },

  updateProfileVenue: (venueId, data) => {
    set((state) => ({
      profileVenues: state.profileVenues.map((venue) =>
        venue.id === venueId ? { ...venue, ...data } : venue
      )
    }));
  },

  removeProfileVenue: (venueId) => {
    set((state) => ({
      profileVenues: state.profileVenues.filter((venue) => venue.id !== venueId)
    }));
  }
}));

export default useVenueStore;
