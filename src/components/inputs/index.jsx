import PropTypes from 'prop-types';

const CustomInput = ({ type, icon, id, placeholder, register, name, ...props }) => {
  return (
    <div>
      <div className="input_container bg-modal rounded-md my-2 ps-3 flex items-center max-w-xs mx-8 sm:mx-20">
        {icon && <div className="input_icon">{icon}</div>}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name)} // Spread register here
          {...props} // Any other props
          className="input input-xs bg-modal max-w-xs my-2 tracking-wide"
        />
      </div>
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default CustomInput;
