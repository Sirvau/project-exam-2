import PropTypes from 'prop-types';

export function SubmitButton({ buttonText }) {
  return (
    <div>
      <button
        type="submit"
        className="btn btn-md bg-tBase border-0 rounded-full w-32 my-6 tracking-wider"
      >
        {' '}
        {buttonText}
      </button>
    </div>
  );
}

SubmitButton.propTypes = {
  buttonText: PropTypes.string.isRequired
};

export default SubmitButton;