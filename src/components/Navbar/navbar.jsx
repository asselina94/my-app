
import { ReactComponent as SearchlongIcon } from "assets/Logo_icon.svg";
import { ReactComponent as SearchIcon } from "assets/search_icon.svg";
//import { ReactComponent as SearchmidIcon } from "assets/searchMid.svg";
//import { ReactComponent as SearchshortIcon } from "assets/searchShort.svg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className = "wrapper">
        <SearchlongIcon />
        <div class = "textWrapper">
          <p className="music">ZaMusic</p>
        </div>
        <div className="search">
        <SearchIcon /></div>
      </div>  
      
    </nav>
  );
}

export default Navbar