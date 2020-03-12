import React from 'react';

import {
         NavLink
	} from 'react-router-dom';


function NavBar(){
  return (
     <div>
	<nav>
	   <NavLink exact to ="/">Home</NavLink>
 	   <NavLink to="/Weather">Mars Weather</NavLink>
           <NavLink to="/MarsRoverPhoto">Mars Rover Photo</NavLink>
           <NavLink to="/About">About</NavLink>
	</nav>  
     </div>
  );
}

export default NavBar;
