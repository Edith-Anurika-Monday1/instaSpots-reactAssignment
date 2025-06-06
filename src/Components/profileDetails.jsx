const profileDetails = ({ profile, setShowModifyModal, setShowCreatePostModal }) => {
    return (
      <section className="profile">
        <img className="profileImage" src={profile.image} alt="Profile" />
  
        <div className="profileDetails">
          <div className="profileNameAndJob">
            <h2 className="profileName">{profile.name}</h2>
            <p className="profileJobTitle">{profile.job}</p>
          </div>
  
          <p className="profileEdit" onClick={() => setShowModifyModal(true)}>
            <img
              className="EditIcon"
              src="./Assets/icons/Edit-Profile-Icon-Light.svg"
              alt="Edit"
            />
            Edit Profile
          </p>
        </div>
  
        <button className="profileBtn" onClick={() => setShowCreatePostModal(true)}>
          <img
            className="newPostIcon"
            src="./Assets/icons/New-Post-Icon.svg"
            alt="New Post"
          />
          New Post
        </button>
      </section>
    );
  };
  
  export default profileDetails;