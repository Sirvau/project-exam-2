import { Link } from 'react-router-dom';
import { locationPlaceholderImg } from '../../../images';
import { starIcon, personIcon, pinIcon } from '../../icons';
import PropTypes from 'prop-types';

function VenueCardTemplate({ className = '' }) {
  return (
    <Link to="">
      <div
        className={`border border-modal rounded-sm shadow-md p-4 hover:bg-modal hover:scale-95 hover:duration-500 ${className}`}>
        <div className="">
          <div className="brightness-90 hover:brightness-105 hover:duration-500">
            {locationPlaceholderImg}
          </div>
          <div className="flex items-center py-1 px-4 opacity-90 rounded-es-sm">
            <div className="flex items-center">
              {' '}
              {starIcon}
              <p className="ms-2">5,2</p>
            </div>
          </div>
        </div>
        <h3 className="font-header font-semibold mt-2 ms-4">This is the venue Name</h3>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center ms-4">
            {pinIcon} <p className=" text-sm ms-2">Location/ city</p>
          </div>
          <div className="flex items-center me-4">
            {personIcon}
            <p className="ms-2 me-1">4</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

VenueCardTemplate.propTypes = {
  className: PropTypes.string
};

export default VenueCardTemplate;
