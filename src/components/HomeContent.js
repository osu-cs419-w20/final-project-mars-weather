import React, 
       { useEffect,
	 useState 
       } from 'react';
import fetch from 'isomorphic-unfetch';

function HomeContent(){
  const [ data, setData ] = useState([]);
  const  api = "https://api.nasa.gov/planetary/apod?api_key=c872L3iRHOM9jlIPxbLTb0hgRk1q87Cs0jmDBcPh";
   const testapi ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  useEffect(() => {
  async function fetchPhoto() {
     const response = await fetch(testapi);
     const responseData = await response.json();
     setData(responseData || [] );
  }
     fetchPhoto();
   
  }, testapi);


   return(
      <div>
	 <h1>Photo of the day</h1>
	 <h3>{data.date}</h3>
	 <img src={data.url} />
	 <h2>Description: </h2>
	 <h3>{data.explanation}</h3>
      </div>
   );
}

export default HomeContent;
