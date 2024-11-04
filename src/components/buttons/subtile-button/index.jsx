import PropTypes from 'prop-types';

export function SubtileButton({ buttonText, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        type=""
        className="btn btn-md bg-primary border-1 border-overlayLighter hover:border-overlayLight hover:bg-overlayLight rounded-full w-32 my-6 text-tBase tracking-wider">
        {' '}
        {buttonText}
      </button>
    </div>
  );
}

SubtileButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default SubtileButton;
