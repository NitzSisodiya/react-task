import React from "react";
import Photo from '../newlogo.png';
import btn from '../menu.png';
class Nav extends React.Component {
    render(){
        return(
            <>
           <div class="nav">
      <ul>
        <li><img id="logo" src={Photo} alt="logo" /></li>
        <li><a href="https://www.w3schools.com/" target="_blank"> <img id="btn" src={btn} alt="btn" /> </a></li>
      </ul>
      </div> 
          </>  
        
        );
    }
}
export default Nav ;