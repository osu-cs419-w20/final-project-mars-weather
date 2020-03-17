import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled/macro';

const BackGround = styled.div`

`;

function About(){
  return (
    <div>
      <h1>About</h1>
      <h2>Made by martians for martians</h2>
      <h3>Using data from Nasa we put together a Mars weather app.</h3>
      <a href="https://api.nasa.gov/">Nasa Link</a>
    </div>
  );
}

export default About;
