import React, {
          useEffect,
	  useState
       } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled/macro';

const ContainerStyled = styled.div`
	display: inline;
	h2{
	   position: absolute;
	   top: 220px;
	   left: 722px;
	}
	.description{
	   position: absolute;
	   background:inherit;
	   width: 520px;
	   height: 516px;
	   top: 299px;
	   left: 722px;
	   overflow: scroll;
	}	
`;

const PicStyled = styled.img`
	display: inline;
	width: 650px;
	height: 600px;
	position: relative;
`;

function HomeContent(){
   const [ data, setData ] = useState([]);
   const  api = "https://api.nasa.gov/planetary/apod?api_key=c872L3iRHOM9jlIPxbLTb0hgRk1q87Cs0jmDBcPh";
   const testapi ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

   useEffect(() => {
     async function fetchPhoto() {
       const response = await fetch(api);
       const responseData = await response.json();
       setData(responseData || [] );
     }
     fetchPhoto();

   }, api);


   return(
      <ContainerStyled>
    	 <h1>Photo of the day</h1>
    	 <h3>{data.date}</h3>
    	 <PicStyled src={data.url} />
    	 <h2>Description: </h2>
    	 <h3 className = "description"> {data.explanation}</h3>
      </ContainerStyled>
   );
}

export default HomeContent;
