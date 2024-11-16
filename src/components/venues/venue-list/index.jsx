import { useEffect } from 'react';
import useApi from '../../../hooks/api';
import SmallVenueCard from '../venue-card/small-card';
import { ALL_VENUES_URL } from '../../../constants';
import { useAllVenuesStore } from '../../../stores/all-venues';

function VenueList() {
  const { data: venues, loading, error, GET } = useApi(ALL_VENUES_URL);
  const setVenues = useAllVenuesStore((state) => state.setVenues);

  useEffect(() => {
    const fetchVenues = async () => {
      const fetchedData = await GET();
      if (fetchedData) {
        setVenues(fetchedData);
      }
    };
    fetchVenues();
  }, [GET, setVenues]);

  if (loading) return <p>Loading venues...</p>;
  if (error) return <p>Error loading venues: {error}</p>;

  const venuesWithImages = Array.isArray(venues)
    ? venues.filter((venue) => venue.media && venue.media.length > 0 && venue.media[0].url)
    : [];

  return (
    <section className="mt-12">
      <div className="flex flex-wrap justify-center gap-4">
        {venuesWithImages.length > 0 ? (
          venuesWithImages.map((venue) => (
            <SmallVenueCard key={venue.id} className="w-72 h-auto" venue={venue} />
          ))
        ) : (
          <p>No venues available with images.</p>
        )}
      </div>
    </section>
  );
}

export default VenueList;
