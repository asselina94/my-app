import React, { useState } from "react";
import { ReactComponent as PostIcon } from "assets/heart.svg";
import { ReactComponent as Heart } from "assets/heartsmall.svg";
import './Likebutton.css';

const LikeButton = () => {
  const [like, setLiked] = useState(false);

  return (
    <div className = "app" >
      <button onClick= {() => setLiked((prevLike) => !prevLike)}>
         {like ? <PostIcon /> : <Heart/>}
      </button>
    </div>
  );
};


export default LikeButton;