import PropTypes from 'prop-types';

export function SubtileButton({ buttonText, onClick, icon, className = '' }) {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={`btn btn-md bg-primary border-1 border-overlayLighter hover:border-overlayLight hover:bg-overlayLight rounded-full w-40 text-tBase text-sm tracking-wider ${className}`}>
        {buttonText}
        {icon}
        <span className="hidden size-4 loading loading-spinner"></span>
      </button>
    </div>
  );
}

SubtileButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string
};

export default SubtileButton;
