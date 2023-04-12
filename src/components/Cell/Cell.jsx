import React from 'react'
import tomodellImg from 'assets/reactangle7.png';
import './Cell.css';

const Cell = () => {
  return (
    <div class="wrapper">
        <img src={tomodellImg} alt="" className = "musicImg" />
   
      <div class = "textWrapper">
        <p className="songName">Another Love</p>
        <p className="artistName">Tom Odell</p>
      </div>
    </div>
        
  )
}

export default Cell
