import React from "react";
import pic from "../pics/err.jpg";
import styled from '@emotion/styled/macro';

const NotFoundStyled = styled.div`
	h1{
	    text-align: center;
	    font-size: 50px;
	}
	img{
	    display: block;
	    margin-left: auto;
	    margin-right: auto;
	    
	}
`;

function NotFound(){
  return (
    <NotFoundStyled>
      <h1>The page you request is not found!</h1>
      <img src={pic} alt="404" />
    </NotFoundStyled>
  );
}

export default NotFound;
