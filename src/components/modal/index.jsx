import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useModalStore } from '../../stores/modal-store';

export function Modal({
  id,
  header,
  subtitle,
  subText,
  bodyText,
  modalImg,
  form,
  button,
  deviderLine,
  className = ''
}) {
  const dialogElement = useRef();
  const isOpen = useModalStore((state) => state.modals[id]);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    if (isOpen) {
      dialogElement.current?.showModal();
    } else {
      dialogElement.current?.close();
    }
  }, [isOpen]);

  return (
    <div>
      <dialog className="modal bg-modal modal-middle" id={id} ref={dialogElement}>
        <div className={`flex flex-col md:flex-row ${className}`}>
          <form method="dialog">
            <button
              className="btn btn-sm btn-ghost bg-primary rounded-full absolute right-4 top-4"
              onClick={() => closeModal(id)}>
              ✕
            </button>
          </form>

          {/* Modal Image Column */}
          <div className="w-full md:w-1/2 h-auto bg-primary flex justify-center items-center">
            {modalImg}
          </div>

          {/* Main Content Column */}
          <div className="w-full md:w-1/2 p-6">
            <div className="modal-header text-center mt-6">
              <h1 className="font-header text-3xl">{header}</h1>
              <h2 className="font-base mt-2">{subtitle}</h2>
              <p className="text-xs italic">{subText}</p>
            </div>
            <div>{form}</div>
            <div className="mb-4">{deviderLine}</div>
            <div className="text-center">
              <p>{bodyText}</p>
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
  deviderLine: PropTypes.node,
  className: PropTypes.string
};

export default Modal;
