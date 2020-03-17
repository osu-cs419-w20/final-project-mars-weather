import React, {
          useEffect,
	  useState
       } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled/macro';


const ContainerStyled = styled.div`
	display: inline;
	h1{
	   position: relative;
	   left: 302px;
	   top: 60px;
	}

	h2{
	   position: relative;
	   top: -15px;
	   padding: 23px 0px 0px 47px;	
	}

	.date{
	   position: relative;
	   left: 861px;
	   top: 14px;
	}

	.format{ 
           position: absolute;
           width: 530px;
           height: 600px;
           top: 240px;
           left: 1022px;
           overflow: hidden;
	   box-shadow: inset 0 0 1000px 155px #f3c7a6;
	   color: #34131b;

        }
	h3.description{
		padding: 5px 46px 0px 51px;
	}

`;


const PicStyled = styled.img`
	display: inline;
	width: 650px;
	height: 600px;
	position: relative;
	left: 300px;
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
    	 <h3 className = "date">{data.date}</h3>
    	 <PicStyled src={data.url} />
	<div className = "format"> 
	   <h2>{data.title} </h2>
	 
    	 <h3 className= "description"> {data.explanation}</h3>
	 </div>
      </ContainerStyled>
   );
}

export default HomeContent;
