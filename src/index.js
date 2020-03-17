import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Global, css} from '@emotion/core';
import pic from "./pics/Mars5.jpg";
const globalStyles = css`
<<<<<<< HEAD

     body{
	margin: 0px;
	background-image:url(${pic});
=======
     body {
	      margin: 0px;
>>>>>>> d4e07f5bbeb2013caa8241dfe7a99fc60d24885a

     }

`;

ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
