import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchVenues({ venues = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filterVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full mx-auto max-w-xs sm:max-w-lg md:max-w-full xl:max-w-screen-2xl mb-6">
      <div className="flex flex-row items-center">
        <input
          placeholder="Search for venue names ..."
          className="w-full max-w-xs sm:max-w-lg md:max-w-full xl:max-w-screen-2xl px-4 py-1 rounded-full  border-primary  hover:brightness-105 duration-300 bg-tBase text-primary placeholder:text-primary placeholder:font-medium "
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value.trim())}
        />
      </div>

      {filterVenues.length > 0 && searchTerm.length > 0 && (
        <ul className="absolute z-20 left-0 right-0 border-rounded bg-modal shadow-lg ">
          {filterVenues.map((venue) => {
            return (
              <li key={venue.id} className="hover:bg-tBase hover:text-primary duration-300">
                <Link to={`specific-venue/${venue.id}`} className="block p-4">
                  {venue.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default SearchVenues;
