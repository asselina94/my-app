
import { ReactComponent as SearchlongIcon } from "assets/Logo_icon.svg";
//import { ReactComponent as SearchnobackIcon } from "assets/longNoback.svg";
//import { ReactComponent as SearchmidIcon } from "assets/searchMid.svg";
//import { ReactComponent as SearchshortIcon } from "assets/searchShort.svg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className = "search">
      <div className = "wrapper">
        <SearchlongIcon />
        <div class = "textWrapper">
          <p className="music">ZaMusic</p>
        </div>
      </div>  
    </div>
  )
}

export default Navbar