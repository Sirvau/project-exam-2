import PropTypes from 'prop-types';

export function SubtileButton({ buttonText, onClick, icon }) {
  return (
    <div>
      <button
        onClick={onClick}
        type=""
        className="btn btn-md bg-primary border-1 border-overlayLighter hover:border-overlayLight hover:bg-overlayLight rounded-full w-40 my-6 text-tBase text-sm tracking-wider">
        {' '}
        {buttonText}
        {icon}
      </button>
    </div>
  );
}

SubtileButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node
};

export default SubtileButton;
