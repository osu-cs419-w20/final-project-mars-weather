import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Global, css} from '@emotion/core';
import pic from "./pics/Mars6.jpg";
const globalStyles = css`

     body{
	margin: 0px;
	background-image:url(${pic});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	color: black;     
	
     }

`;

ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
