import React from 'react';
import HomeContent from '../components/HomeContent';
import pic from "../pics/Mars5.jpg";
import styled from '@emotion/styled/macro';

const BackStyled = styled.div`
	
`;

function Home(){
  return (
    <BackStyled>
       <h1 className="pageTitle">Home</h1>
       <HomeContent />
    </BackStyled>
  );
}

export default Home;
