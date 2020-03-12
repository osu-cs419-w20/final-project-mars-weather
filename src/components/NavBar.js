import React from 'react';
import styled from '@emotion/styled/macro';
import {
         NavLink
	} from 'react-router-dom';

const BarStyled = styled.nav`
   margin: 0px;
   height: 45px;
   
   a{
	text-decoration: none;
	color: black;
	padding: 11px;
	font-size: 35px;
    }

    a.active{
	background-color: lightgrey; 
    }
`;

function NavBar(){
  
  return (
     <div>
	<BarStyled>
	   <NavLink exact to ="/">Home</NavLink>
 	   <NavLink to="/Weather">Mars Weather</NavLink>
           <NavLink to="/MarsRoverPhoto">Mars Rover Photo</NavLink>
           <NavLink to="/About">About</NavLink>
	</BarStyled>  
     </div>
  );
}

export default NavBar;
