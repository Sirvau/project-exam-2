import PropTypes from 'prop-types';

export function Modal({
  id,
  header,
  subtitle,
  subText,
  bodyText,
  modalImg,
  form,
  button,
  deviderLine
}) {
  return (
    <div>
      <dialog id={id} className="modal bg-modal modal-middle flex justify-center">
        <div className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative">
          <form method="dialog">
            <button className="btn btn-sm btn-ghost absolute right-4 top-4">✕</button>
          </form>
          <div className="hidden md:block">{modalImg}</div>
          <div className="main-content-container">
            <div className="modal-header text-center mt-12">
              <h1 className="font-header text-3xl">{header}</h1>
              <h2 className="font-base mt-2">{subtitle}</h2>
              <p className="text-xs italic">{subText}</p>
            </div>
            <div>{form}</div>
            <div className="mb-4">{deviderLine}</div>
            <div className="text-center">
              <p className="">{bodyText}</p>
              <div className="pb-4 mt-4">{button}</div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subText: PropTypes.string,
  bodyText: PropTypes.string,
  modalImg: PropTypes.node,
  form: PropTypes.node,
  button: PropTypes.node,
  deviderLine: PropTypes.node
};

export default Modal;
