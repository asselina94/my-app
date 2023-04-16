import React from 'react'
import { ReactComponent as SearchlongIcon } from "assets/searchLong.svg";
import { ReactComponent as SearchnobackIcon } from "assets/longNoback.svg";
import { ReactComponent as SearchmidIcon } from "assets/searchMid.svg";
import { ReactComponent as SearchshortIcon } from "assets/searchShort.svg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className = "search">
      Navbar
      <SearchlongIcon />
      <SearchnobackIcon />
      <SearchmidIcon />
      <SearchshortIcon />
      
       
    </div>
  )
}

export default Navbar