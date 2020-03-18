import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled/macro';

const BackGround = styled.div`
	

        h2{
	    font-size: 30px;
	    text-align: center;
	    position: relative;
	    top: 35px;
	}

	h3{
	    font-size: 25px;
	    text-align: center;
	    position: relative;
	    top: 50px; 
	}

	a{
		
	   text-decoration: none;
	   font-size: 30px;
	   position: relative;
	   top: 60px; 	
	   left: 900px;
	}
`;

function About(){
  return (
    <BackGround>
      <h1 className = "pageTitle">About</h1>
      <h2>Made by martians for martians</h2>
      <h3>Using data from Nasa we put together a Mars weather app.</h3>
      <a href="https://api.nasa.gov/">Nasa Link</a>
    </BackGround>
  );
}

export default About;
