import React, {
          useEffect,
	  useState
       } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled/macro';


const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 2%;

  .format {
     width: 530px;
     height: 600px;
     overflow: auto;
     background-color: rgba(243, 199, 166, 0.5);
     box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.75);

     h2{
        text-align: center;	
     }
  }

   h3.description{
     padding: 5px 46px 0px 51px;
   }

  .APOD {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    
    .photoTitle h1{
       position: relative;
       top: 60px;
    }

    .photoTitle h3{
	position: relative;
	top: 15px;
	left: 560px;
    }

  }

`;


const PicStyled = styled.img`
  max-width: 650px;
  height: auto;
  margin: 0;
  padding: 0;
  box-shadow: 0px 0px 40px 4px rgba(0,0,0,0.75);
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
        <div className="APOD">

          <div className="photoTitle">
            <h1> Photo of the day </h1>
            <h3 className="date"> {data.date} </h3>
          </div>

          <PicStyled src={data.url} />

        </div>

        <div className = "format">
          <h2>{data.title} </h2>
          <h3 className= "description"> {data.explanation}</h3>
        </div>

      </ContainerStyled>
   );
}

export default HomeContent;
