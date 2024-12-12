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
          placeholder="Search for products ..."
          className="w-full max-w-xs sm:max-w-lg md:max-w-full xl:max-w-screen-2xl px-4 py-1 border rounded-full  border-oak-brown hover:brightness-105 duration-300 bg-light-beige font-medium tracking-wide"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value.trim())}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#6F390D"
          className="size-7 mx-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {filterVenues.length > 0 && searchTerm.length > 0 && (
        <ul className="absolute z-20 left-0 right-0 border-rounded bg-light-beige shadow-lg ">
          {filterVenues.map((venue) => {
            return (
              <li key={venue.id} className="hover:bg-md-beige duration-300">
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
