import Form from "../forms";

export function Modal({ id, header, subtitle, modalImg, formProps }) {
  return (
    <div>
      <dialog id={id} className="modal bg-modal modal-middle">
        <div className="modal-box bg-primary">
          <form method="dialog">
            <button className="btn btn-sm btn-ghost absolute right-4 top-4">✕</button>
          </form>
          <div className="modal-header text-center mt-12">
            <h1 className="font-header text-4xl">{header}</h1>
            <h2 className="font-base mt-2">{subtitle}</h2>
          </div>
          <div className="modal-content text-center">
            <div className="hidden md:block">{modalImg}</div>
            <Form {...formProps} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
