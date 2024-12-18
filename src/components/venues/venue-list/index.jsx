import { useEffect } from 'react';
import useVenueStore from '../../../stores/venue-store';
import SmallVenueCard from '../venue-card/small-card.jsx';

const VenueList = () => {
  const { venues, loading, error, fetchVenues } = useVenueStore();

  useEffect(() => {
    fetchVenues(true, true);
  }, [fetchVenues]);

  if (loading) return <p>Loading venues...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 mx-8 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {venues.map((venue) => (
        <SmallVenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
};

export default VenueList;
