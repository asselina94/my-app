import React, { useState } from "react";
import Heart1 from "../../assets/heart.svg";
import Heart2 from "../../assets/heartfull.svg";
import './Likebutton.css';

const LikeButton = () => {
  const [like, setLiked] = useState(false);

  return (
    <div className = "btn" >
      <button onClick= {() => setLiked((prevLike) => !prevLike)}>
      Lik: {like? "Heart1" : "Heart2"}
      </button>
    </div>
  );
};

export default LikeButton;