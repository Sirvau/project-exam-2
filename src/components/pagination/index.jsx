import PropTypes from 'prop-types';
import { next, previous } from '../icons';

export const VenuePagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pageNumbers = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
    const startPage = Math.max(1, currentPage - 2);
    return startPage + index;
  });

  return (
    <div className="flex items-center justify-center space-x-2 mt-20 gap-2">
      <button
        className="text-tBase border-0  hover:scale-150 p-2"
        onClick={handlePrevious}
        disabled={currentPage === 1}>
        {previous}
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`py-2 px-4 rounded-full bg-modal text-tBase hover:scale-110 ${page === currentPage ? 'border-2 border-tBase text-primary' : ''}`}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      <button
        className="text-tBase border-0 hover:scale-150 p-2"
        onClick={handleNext}
        disabled={currentPage === totalPages}>
        {next}
      </button>
    </div>
  );
};

VenuePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default VenuePagination;
