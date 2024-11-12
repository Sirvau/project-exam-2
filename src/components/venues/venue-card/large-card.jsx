import { Link } from 'react-router-dom';
import { locationPlaceholderImg } from '../../../images';
import { starIcon, personIcon, pinIcon } from '../../icons';

function VenueCardLarge() {
  return (
    <Link to="">
      <div className="shadow-md hover:bg-primary hover:border hover:border-modal hover:scale-95 hover:duration-500 bg-modal p-12 lg:full lg:me-6">
        <div className="relative">
          <div className="brightness-90 hover:brightness-105 hover:duration-500">
            {locationPlaceholderImg}
          </div>
          <div className="absolute flex top-0 right-0 items-center bg-modal py-1 px-4 opacity-90 rounded-es-sm">
            {starIcon}
            <p className="ms-2">5,2</p>
          </div>
        </div>
        <div className="sm:flex sm:justify-between">
          <h3 className="font-header font-semibold mt-2 text-2xl tracking-wide">
            This is the venue Name
          </h3>
          <div className="flex items-center mt-4">
            {pinIcon}
            <p className=" text-sm ms-2"> Location/ city</p>{' '}
          </div>
          <div className="flex items-center mt-1">
            {personIcon} <p className="ms-2 me-1">4</p>
          </div>
        </div>
        <p className="mt-2">
          This is the venue description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Link>
  );
}

export default VenueCardLarge;
