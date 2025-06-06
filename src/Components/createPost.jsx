import { useState, useEffect, useRef } from "react";

const CreatePost = ({ show, onClose, onAddPost }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [info, setInfo] = useState("");
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

  const overlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const Exit = (e) => {
    e.stopPropagation();
  };

  const Submit = (e) => {
    e.preventDefault();

    const image = data ? URL.createObjectURL(data) : imageUrl.trim();

    if (!image) {
      alert("Please upload an image or enter an image URL");
      return;
    }

    onAddPost({
      id: Date.now().toString(),
      src: image,
      title: title || "Untitled",
      description: info || "Untitled",
      liked: false,
    });

    setImageUrl("");
    setTitle("");
    setData(null);
    setInfo("");

    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={overlayClick}>
      <dialog
        className="newPostDialog"
        open
        ref={dialogRef}
        onClick={Exit}
      >
        <button onClick={onClose} className="closeBtn">
          ✖
        </button>

        <h2>New Post</h2>
        <p>Upload Image or Paste URL</p>

        <form onSubmit={Submit} className="formm">
          <label>
            <input
              type="text"
              placeholder="Enter name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
           
            <input
              type="text"
              placeholder="Enter description"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>

          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setData(e.target.files[0])}
            />
          </label>

          <label>
            <input
              type="url"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>

          <button type="submit" className="submitBtn">
            Add Card
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default CreatePost;