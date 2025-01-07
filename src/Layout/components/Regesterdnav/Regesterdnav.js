import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Regesterdnav.css';

const handleClick = () => {
  let myLinksElement = document.getElementById("myLinks");
  if (myLinksElement.style.display === "none") {
    myLinksElement.style.display = "block";
  } else {
      myLinksElement.style.display = "none";
  };
};

const handleResize = () => {
  let myLinksElement = document.getElementById("myLinks");
  if (window.innerWidth >= 628) {
    myLinksElement.style.display = "flex"; 
  } else {
    myLinksElement.style.display = "none"; 
  };
}

const Regesterdnav = () => {
  useEffect(()=>{
    window.addEventListener("resize", handleResize, false);
  },)
  return (
    <nav className="navbar">
        <div><Link to="/">Home</Link></div>
        <div id="myLinks">
          <div><Link to="/Problems">Problems</Link></div>
          <div><Link to="/Teachers">Teachers</Link></div>
          <div><Link to="/Students">Students</Link></div>
          <div id="right"><Link to="/Profile">Profile</Link></div>
          <div><Link to="/About">About</Link></div>
        </div>
        <div><a id="icon" className="icon" onClick={handleClick}><i class="fa fa-bars"></i></a></div>
    </nav>
  );
}
      
export default Regesterdnav;