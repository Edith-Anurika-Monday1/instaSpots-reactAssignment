import React, { useState} from "react";
import "./insta.css";
import pictures from "./components/pictures";
import editProf from "./components/editProf";
import createPost from "./components/createPost";
import profileDetails from "./components/profileDetails";
const pictures = [
    {
       id: "valThorens",
       src: "../Assets/images/Vals-Thorens.png",
       title: "Val Thorens",
       description: "A ski town in the French Alps, known for its stunning slopes and vibrant après-ski scene.",
    },
{
    id: "restaurantTerrace",
    src: "../Assets/images/Restaurant-Terrace.png",
    title: "Restaurant terrace",
    description: "A restaurant terrace dressed in green and yellow - an ambience of grandeur and elegance. A promise of fine dining and a good time.",
},
{
    id: "outdoorCafe",
    src: "../Assets/images/An-outdoor-cafe.png",
    title: "An outdoor cafe",
    description: "  An outdoor cafe buzzing softly with laughter and conversation. The perfect spot to unwind and savour the moment.",
},
{
    id: "longBridge",
    src: "../Assets/images/A-very-long-bridge-over-the-forest.png",
    title: "A very long bridge, over the forest...",
    description: " A very long bridge, suspended over the forest. Can you dare to cross it?",
},
{
    id: "tunnelMorningLight",
    src: "../Assets/images/Tunnel-with-the-morning-light.png",
    title: "Tunnel with morning light",
    description: "Iron-framed glass walls, morning light spilling from their sides - glinting, scattering. A breathtaking sight.",

},
{
    id: "mountainHouse",
    src: "../Assets/images/Mountain-house.png",
    title: "Mountain house",
    description: "A mountain house shrouded in fog, surrounded by trees and of course mountains. Depending on your vibe, it could be mean solitude. A cabin perfect for a getaway",
},
].map((img) => ({ ...img, liked: false }));
const InstaSpot = () => {
    const [idPreview, setidPreview] = useState(null);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [showCreatePostModal, setShowCreatePostModal] = useState(false);
    const [pics, setPics] = useState(firstPics);
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [image, setImage] = useState(null);
    const [posts, setPosts] = useState([]);
  
   const AddPost = (postData) => {
    setPosts((prev) => {
      const maxId = prev.length > 0 ? Math.max(...prev.map(p => p.id)) : 0;
      const createPost = {
        ...postData,
        id: maxId + 1,
        liked: false,
      };
      return [...prev, createPost];
    });
  };
  
    const [profile, setProfile] = useState({
      name: "Bessie Coleman",
      job: "Civil Aviator",
      image: "./Assets/images/Bessie-Coleman.png",
    });
  
    const heartToggle = (id) => {
      setPics((prev) =>
        prev.map((img) => (img.id === id ? { ...img, liked: !img.liked } : img))
      );
  
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, liked: !post.liked } : post
        )
      );
    };
  
    function handleSave(e) {
      e.preventDefault();
      setProfile((prev) => ({
        name: name !== "" ? name : prev.name,
        job: job !== "" ? job : prev.job,
        image: image ? URL.createObjectURL(image) : prev.image,
      }));
      setName("");
      setJob("");
      setImage("");
      setShowModifyModal(false);
    }
  
    return (
      <div>
        <profileDetails
          profile={profile}
          setShowModifyModal={setShowModifyModal}
          setShowCreatePostModal={setShowCreatePostModal}
        />
  
        <div className="thin-line"></div>
  
        <createPost
          show={showCreatePostModal}
          onClose={() => setShowCreatePostModal(false)}
          onAddPost={AddPost}
        />
  
        <editProf
          show={showModifyModal}
          onClose={() => setShowModifyModal(false)}
          name={name}
          setName={setName}
          job={job}
          setJob={setJob}
          setImage={setImage}
          handleSave={handleSave}
        />
  
        <pictures
          pics={[...pics, ...posts]}
          heartToggle={heartToggle}
          idPreview={idPreview}
          setidPreview={setidPreview}
        />
  
        <div className="thin-line"></div>
      </div>
    );
  };
  
  export default InstaSpot;