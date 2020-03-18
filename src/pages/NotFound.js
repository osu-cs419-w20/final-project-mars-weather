import React from "react";
import styled from '@emotion/styled/macro';

const NotFoundStyled = styled.div`
	h1{
	    text-align: center;
	    font-size: 50px;
	}
`;

function NotFound(){
  return (
    <NotFoundStyled>
      <h1>404 The page you request is not found!</h1>
    </NotFoundStyled>
  );
}

export default NotFound;
