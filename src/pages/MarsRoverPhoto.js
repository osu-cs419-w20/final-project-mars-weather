import React, {
          useEffect,
	        useState
       } from 'react';

import fetch from 'isomorphic-unfetch';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const Input = styled.input`
  border: 1px solid #ababab;
  padding: 8px;
  font-size: 18px;
`;

// const TextArea = Input.withComponent('textarea');

const Button = styled.button`
  background-color: #803A15;
  color: #fff;
  border: 2px solid #551E00;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 300;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #AA6039;
  }
`;

const Container = styled.div `
  margin: 20px;
  form {
    margin: 10px;
  }
`;

const Photos = styled.div `
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 2px;

    img {
      max-width: 325px;
      height: auto;
      box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.75);
    }
  }
`;

function RoverContent({ date }) {
  const [ inputDate, setInputDate ] = useState(date || "");
  const [ data, setData ] = useState([]);
  const history = useHistory();
  // const api = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2018-05-03&api_key=c872L3iRHOM9jlIPxbLTb0hgRk1q87Cs0jmDBcPh";
  // const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(date) {
      if (date.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/i) || date==="") {
        console.log("loading data");
        const controller = new AbortController();

        async function fetchRover() {
          let responseData = {};
          // setLoading(true);
          try {
            const response = await fetch(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=c872L3iRHOM9jlIPxbLTb0hgRk1q87Cs0jmDBcPh`,
            { signal: controller.signal }
            );
            responseData = await response.json();
          } catch (e) {
            if (e instanceof DOMException) {
                console.log("== HTTP request aborted");
            } else {
                console.log(e);
            }
          }

            setData(responseData.photos);

        }
        fetchRover();
        return () => {
          controller.abort();
        };
      }
      else{
        alert("Not a valid date");
        return;
      }
    }

  }, [ date ]);

  // console.log(data);
  // console.log("date: " + date);
  if(data) {
    if(data.length > 0) {
      console.log("data");
      return(
         <Container>
           <form onSubmit={(e) => {
             e.preventDefault();
             history.push(`?earth_date=${inputDate}`);
           }}>
             <Input
              type="date"
              name="date"
              id="date"
              value={inputDate}
              onChange={e => setInputDate(e.target.value)}
             />

             <Button type="submit">Search Date</Button>
           </form>

           <Photos>
             {data.map(rover => (
               <div key={rover.id}>
                 <img src={rover.img_src} alt="from the mars rover" />
               </div>
             ))}
           </Photos>

         </Container>
      );
    }
    else {
      console.log("no data");
      return (
        <Container>
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`?earth_date=${inputDate}`);
          }}>
          <Input
           type="date"
           name="date"
           id="date"
           value={inputDate}
           onChange={e => setInputDate(e.target.value)}
          />

          <Button type="submit">Search Date</Button>
          </form>

          <div>
            <h3> There are no photos for this date </h3>
          </div>

        </Container>
      );
    } // end if

  }
  else {
    console.log("no data");
    return (
      <Container>
        <form onSubmit={(e) => {
          e.preventDefault();
          history.push(`?earth_date=${inputDate}`);
        }}>
          <Input
            value={inputDate}
            onChange={e => setInputDate(e.target.value)}
          />

          <Button type="submit">Search Date</Button>
        </form>

        <div>
          <h3> Please enter a real date </h3>
        </div>

      </Container>
    );
  }

}

function MarsRoverPhoto({date}){
  // console.log("MarsRoverPhoto date:" + date);
  return (
    <div>
      <h1 className="pageTitle">MarsRoverPhoto</h1>
      <RoverContent date={date}/>
    </div>
  );
}

export default MarsRoverPhoto;
