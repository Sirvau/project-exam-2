import { useEffect, useState } from 'react';
import useVenueStore from '../../../stores/venue-store';
import SmallVenueCard from '../venue-card/small-card.jsx';
import VenuePagination from '../../pagination';
import Loader from '../../animations/index.jsx';

const VenueList = () => {
  const { venues, loading, error, fetchVenues } = useVenueStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchAndSetVenues = async () => {
      try {
        const response = await fetchVenues(true, true, currentPage, limit, 'created', 'asc');
        const { meta } = response;
        setTotalPages(Math.ceil(meta.totalCount / limit));
      } catch (err) {
        console.error('Error fetching venues:', err);
      }
    };

    fetchAndSetVenues();
  }, [fetchVenues, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 mx-8 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {venues.map((venue) => (
          <SmallVenueCard key={venue.id} venue={venue} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <VenuePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default VenueList;
