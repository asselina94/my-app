import React, { useState } from "react";
import Heart3 from "../../assets/heartfull.png";
import Heart1 from "../../assets/heart1.png";
import './Likebutton.css';

const Likebutton = () => {
  const [like, setLiked] = useState(false);

  return (
    <div className = 'btn' >
      <button onClick= {() => setLiked((prevLike) => !prevLike)}>
       like {like? Heart3 : Heart1}

      </button>
    </div>
  )
}

export default Likebutton