import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function SmallModal({ isOpen, children }) {
  const dialogElement = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogElement.current.showModal();
    } else {
      dialogElement.current.close();
    }
  }, [isOpen]);

  return (
    <div>
      <dialog ref={dialogElement} className="modal bg-modal modal-middle flex justify-center">
        <div className=" bg-primary md:flex relative py-8 px-4 ">{children}</div>
      </dialog>
    </div>
  );
}

SmallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default SmallModal;
