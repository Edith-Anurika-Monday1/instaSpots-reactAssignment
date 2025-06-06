import { useEffect, useRef } from "react";

const editProf = ({
  show,
  onClose,
  name,
  setName,
  job,
  setJob,
  setImage,
  handleSave,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    const Escape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", Escape);

    return () => {
      document.removeEventListener("keydown", Escape);
    };
  }, [show, onClose]);

  
  const Exit = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <dialog
      className="edit-modal"
      open
      ref={dialogRef}
      onClick={Exit}
    >
      <div className="flex">
        <div className="modal-content">
          <p className="closeBtn" onClick={onClose}>
            ✖
          </p>
          <h2>Edit Profile</h2>
          <form onSubmit={handleSave}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Name"
              id="editName"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="job">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              id="editJob"
              required
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />

            <input
              type="file"
              name="imageFile"
              id="editImage"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <button id="saveProfile" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default editProf;