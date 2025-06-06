import { useEffect, useRef } from "react";
import heartButton from "./heartButton";

const pictures = ({ pics, heartToggle, idPreview, setIdPreview }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!idPreview) return;

    const Escape = (e) => {
      if (e.key === "Escape") {
        setIdPreview(null);
      }
    };

    document.addEventListener("keydown", Escape);
    return () => document.removeEventListener("keydown", Escape);
  }, [idPreview, setIdPreview]);

  const OverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setIdPreview(null);
    }
  };

  const Exit = (e) => {
    e.stopPropagation();
  };

  const toggleDialog = (id) => setIdPreview(id);
  const closeDialog = () => setIdPreview(null);

  return (
    <section className="gallery_container">
      <div className="gallery_grid">
        {pics.map(({ id, src, title, description, liked }) => (
          <div className="gallery_image" key={id}>
            <img
              src={src}
              alt={title}
              className="img1"
              onClick={() => toggleDialog(id)}
            />
            <div className="content">
              <p>{title}</p>
              <like liked={liked} onToggle={() => heartToggle(id)} />
            </div>

            {idPreview === id && (
              <div className="modal-overlay" onClick={OverlayClick}>
                <dialog
                  open
                  className="preview-dialog"
                  ref={dialogRef}
                  onClick={Exit}
                >
                  <img src={src} alt={title} className="modal-img" />
                  <p className="modal-title">{title}</p>
                  <p className="modal-description">{description}</p>
                  <button onClick={closeDialog}>Close</button>
                </dialog>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default pictures;