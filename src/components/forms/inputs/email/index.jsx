export function EmailInput({ id, label, placeholder }) {

    return (
      <div className="">
        <label htmlFor={id} className="label hidden">{label}</label>
        <input
          id={id}
          type="email"
          required
          pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
          placeholder={placeholder}
          className="input input-sm input-bordered bg-modal w-full max-w-xs"
        />
      </div>
    );
  }  