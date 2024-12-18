import { useEffect, useRef } from 'react';

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
        <div className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative">
          {children}
        </div>
      </dialog>
    </div>
  );
}

export default SmallModal;
