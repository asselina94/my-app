import React, { useState } from "react";
import { ReactComponent as PostIcon } from "assets/heart.svg";
import Heart2 from "../../assets/heartfull.svg";
import './Likebutton.css';

const LikeButton = () => {
  const [like, setLiked] = useState(false);

  return (
    <div className = "app" >
      <button onClick= {() => setLiked((prevLike) => !prevLike)}>
      like: <PostIcon />
      </button>
    </div>
  );
};


export default LikeButton;