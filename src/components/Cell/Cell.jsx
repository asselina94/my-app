import React from 'react'
import tomodellImg from 'assets/reactangle7.png';
import './Cell.css';

const Cell = () => {
  return (
    <div className = "cellstyle">
      <div className = "bodyCellcontent">
        
          <img src={tomodellImg} alt="" className = "musicImg" />
          
          <p className="songName">Another Love</p>
          <p className="artistName">Tom Odell</p>
        </div>
        </div>
      
    
  )
}

export default Cell
