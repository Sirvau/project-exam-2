import PropTypes from 'prop-types';

function SingleImage({ image }) {
  return (
    <div
      className="w-full sm:max-w-xl md:max-w-lg lg:max-w-xl h-[320px] sm:h-[400px] md:h-[320px] lg:h-[400px]"
      style={{ maxHeight: '80vh' }}>
      <img
        src={image.url}
        alt={image.alt || 'Image'}
        className="w-full h-full object-cover border-0 rounded-md"
      />
    </div>
  );
}

SingleImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired
};

export default SingleImage;
