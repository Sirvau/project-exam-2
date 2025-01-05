import PropTypes from 'prop-types';

const CustomInput = ({ type, icon, id, placeholder, register, name, className, ...props }) => {
  return (
    <div>
      <div className="input_container bg-modal rounded-md my-2 ps-1 flex items-center max-w-xs mx-8 sm:mx-20">
        {icon && <div className="input_icon">{icon}</div>}

        {type === 'textarea' ? (
          <textarea
            id={id}
            placeholder={placeholder}
            {...register(name)}
            {...props}
            className={`input input-xs bg-modal max-w-xs h-auto my-2 tracking-wider text-sm  ${className}`}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(name)}
            {...props}
            className={`input input-xs bg-modal max-w-xs h-auto my-2 tracking-wider text-sm ${className}`}
          />
        )}
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
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default CustomInput;
