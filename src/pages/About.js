import React from 'react';
// import {Link} from 'react-router-dom';
import styled from '@emotion/styled/macro';

const BackGround = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(243, 199, 166, 0.5);
	padding: 25px;
	h2 {
		font-size: 30px;
		text-align: center;
		position: relative;
		/* top: 35px; */
	}

	h3 {
	    font-size: 25px;
	    text-align: center;
	    position: relative;
	    /* top: 50px; */
	}

	a{
	   text-decoration: none;
	   /* font-size: 30px; */
	   position: relative;
	   /* top: 60px;
	   left: 900px; */
		 color: #803A15;
		 text-align: center;
	}
	p{
			text-align: center;
			margin: 0 200px 0 200px;
	}
`;

function About(){
  return (
		<div>
		<h1 className = "pageTitle">About</h1>
    <BackGround>

      <h2>Made by martians for martians</h2>
      <h3>Using data from Nasa we put together a Mars weather app.</h3>
			<p>With the help of <a href="https://api.nasa.gov/">NASA's api</a> you can now view the temperature on mars for their week and view photos from the mars rover for a given earth date. </p>
			<p> A day on mars is called a sol and runs 24 hours 39 min and 35.244 seconds.
					While viewing the weather app you will find that the temperature on mars is much colder than what you would experience on earth but still varies sol to sol.
			</p>

    </BackGround>
		</div>
  );
}

export default About;
