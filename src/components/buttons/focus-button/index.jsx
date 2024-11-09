import PropTypes from 'prop-types';

export function FocusButton({ buttonText, onClick, icon }) {
  return (
    <div>
      <button
        onClick={onClick}
        type=""
        className="btn btn-md bg-tBase border-0 rounded-full w-40 my-6 tracking-wider text-sm">
        {' '}
        {buttonText}
        {icon}
      </button>
    </div>
  );
}

FocusButton.propTypes = {
  buttonText: PropTypes.string.isRequired
};

export default FocusButton;
