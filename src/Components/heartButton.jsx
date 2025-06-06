import "./../insta.css";


const HeartButton = ({ liked, onToggle }) => {
  return (
    <i
      className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      style={{ cursor: "pointer" }}
      onClick={onToggle}
    ></i>
  );
};

export default HeartButton;