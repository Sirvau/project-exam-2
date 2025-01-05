import PropTypes from 'prop-types';

export function FocusButton({ buttonText, onClick, icon }) {
  return (
    <div>
      <button
        onClick={onClick}
        type=""
        className="btn btn-md bg-tBase text-primary border-0 rounded-full w-40 my-6 tracking-wider text-sm">
        {' '}
        {buttonText}
        {icon}
        <span className="hidden size-4 loading loading-spinner"></span>
      </button>
    </div>
  );
}

FocusButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element
};

export default FocusButton;
