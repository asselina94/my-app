import React from 'react'
import { ReactComponent as PlayIcon } from "assets/typeplayer.svg";
import { ReactComponent as LikeIcon } from "assets/typelike.svg";
import './Player.css';

const Player = () => {
  return (
    <div>
        <PlayIcon /> 
        <LikeIcon />
    </div>
  )
}

export default Player