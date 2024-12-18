import { useEffect, useState } from 'react';
import { useVenueStore } from '../../../stores/venue-store';
import { loadFromStorage } from '../../../stores/local-storage';
import TableRowTemplate from '../../table-row-template';
import UpdateVenueModal from '../../../modals/admin-venues/update-venue';
import SmallModal from '../../../modals/info/small-modal';
import DeleteVenueModal from '../../../modals/admin-venues/delete-venue';

const MyVenuesTableRow = () => {
  const { profileVenues, fetchProfileVenues, loading, error } = useVenueStore();
  const profileName = loadFromStorage('userProfile')?.name;
  const [selectedVenueId, setSelectedVenueId] = useState(null);
  const [deleteVenueId, setDeleteVenueId] = useState(null);

  useEffect(() => {
    if (profileName) {
      fetchProfileVenues(profileName);
    }
  }, [profileName, fetchProfileVenues]);

  if (!profileName) return <div>No profile selected.</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEdit = (venueId) => {
    setSelectedVenueId(venueId);
  };

  const handleDelete = (venueId) => {
    setDeleteVenueId(venueId);
  };

  return (
    <div>
      {profileVenues && profileVenues.length > 0 ? (
        profileVenues.map((venue) => {
          const isBooked = venue.dateFrom && venue.dateTo;
          const status = isBooked ? 'Booked' : 'Available';
          const date = isBooked
            ? `From: ${new Date(venue.dateFrom).toLocaleDateString()} To: ${new Date(venue.dateTo).toLocaleDateString()}`
            : '';

          return (
            <TableRowTemplate
              key={venue.id}
              media={venue.media?.[0]?.url || ''}
              title={venue.name}
              description={venue.description || 'No description available'}
              status={status}
              date={date}
              persons={venue.maxGuests || 0}
              amount={venue.price || 0}
              onEdit={() => handleEdit(venue.id)}
              onDelete={() => handleDelete(venue.id)}
            />
          );
        })
      ) : (
        <p>No venues available.</p>
      )}

      {/* Reusable UpdateVenueModal Component */}
      {selectedVenueId && (
        <UpdateVenueModal venueId={selectedVenueId} onClose={() => setSelectedVenueId(null)} />
      )}

      {deleteVenueId && (
        <DeleteVenueModal
          venueId={deleteVenueId}
          onCancel={() => setDeleteVenueId(null)}
          onConfirm={() => setDeleteVenueId(null)}
        />
      )}
    </div>
  );
};

export default MyVenuesTableRow;
