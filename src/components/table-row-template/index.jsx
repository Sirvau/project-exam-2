import PropTypes from 'prop-types';
import DeviderLine from '../devider-line';
import { personIcon, editProfileIcon, deleteIcon } from '../icons';

export function TableRowTemplate({
  media = [],
  title = 'Title',
  description = 'Description',
  status = 'Status',
  date = 'No booking',
  persons = 0,
  amount = 0,
  onEdit = null,
  onDelete = null
}) {
  return (
    <section className="sm:mt-4 mb-4 sm:mb-0">
      <DeviderLine />
      <div className="relative content-container flex flex-col sm:flex-row justify-center sm:justify-evenly mt-2 sm:mt-4 mx-16 sm:mx-0 w-3/5 sm:w-full text-left">
        <div className="location-img h-32 w-48 sm:h-16 sm:w-24 lg:h-32 lg:w-44 mt-2">
          <img src={media} alt="Location" className="h-full w-full object-cover" />
        </div>
        <div className="title-and-description mt-2 sm:mt-0 sm:w-2/5 sm:mx-4">
          <h2 className="font-header text-base sm:text-sm lg:text-base mb-2 font-semibold">
            {title}
          </h2>
          <p className="text-sm sm:text-xs lg:text-sm">{description}</p>
        </div>
        <div className="details mt-2 sm:mt-0 ">
          <h3 className="text-secondary my-2 sm:my-0">{status}</h3>
          {status === 'Booked' && <p className="text-sm sm:text-xs lg:text-sm mb-2 mt-3">{date}</p>}
          <div className="text-sm sm:text-xs lg:text-sm mb-2">
            <div className="persons flex mb-2">
              <p className="icon-and-number">
                {personIcon} {persons}
              </p>
              <p className="ms-2"> persons</p>
            </div>
            <p>
              Amount: <span className="amount">{amount} Kr.</span>
            </p>
          </div>
        </div>
        {(onEdit || onDelete) && (
          <div className="actions flex sm:flex-col sm:justify-center gap-6 mt-8 sm:mt-0 text-tBase absolute top-2/3 right-0 sm:relative">
            {onEdit && <button onClick={onEdit}>{editProfileIcon}</button>}
            {onDelete && <button onClick={onDelete}>{deleteIcon}</button>}
          </div>
        )}
      </div>
    </section>
  );
}

TableRowTemplate.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  persons: PropTypes.number,
  amount: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default TableRowTemplate;
