import "./insta.css";

const heartButton = ({ liked, onToggle }) => {
  return (
    <i
      className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      style={{ cursor: "pointer" }}
      onClick={onToggle}
    ></i>
  );
};

export default heartButton;