/** @jsx jsx */

import React, {
        useEffect,
        useState,
        Route,
} from 'react';
import {
    Switch,
    Link,
    useRouteMatch
} from 'react-router-dom';
import Popup from "reactjs-popup";
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

/*c4703f
 * b86637
 * ad5d2f
 *a85627
 *a34f1f
 *a34d1c
 *a34b18
 * With regards to the parameterized routes, I had everything set up in this manner:
 *    - Had individual navlinks for each SOL day
 *    - Had individual component to display based on :path parameter, which was passed in as 0...6
 *    - For some reason, when I tried to route using <Route> </Route>, react was saying that there was an error with 
 *      how the files were imported. Because of this, I was unable to display the pages.
 * */

const headerStyle = css`
    text-align: center;
`;

const parentStyle = css`
    text-align: center;
    /* padding-top: 350px; */
`;

const fontStyle = css`
    color: black;
`;

const modalStyle = css`
    padding-bottom: 20px;
`;

const buttonStyle1 = css`
    color: #c7a591;
    background-color: #c4703f;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;

const buttonStyle2 = css`
    color: #c7a591;
    background-color: #b86637;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;
const buttonStyle3 = css`
    color: #c7a591;
    background-color: #ad5d2f;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;

const buttonStyle4 = css`
    color: #c7a591;
    background-color: #a85627;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;
const buttonStyle5 = css`
    color: #c7a591;
    background-color: #a34f1f;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;
const buttonStyle6 = css`
    color: #c7a591;
    background-color: #a34d1c;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;
const buttonStyle7 = css`
    color: #c7a591;
    background-color: #a34b18;
    border: none;
    border-radius: 12px;
    padding: 15px;
    text-decoration: none;
    margin: 2px;
`;

const popupStyle = css`
    background: blue;
    color: red;
`;

const Drawer = styled.div`

  /* max-width: 500px; */
  ul {
    list-style-type: none;
   li {
     a{
       /* text-decoration: none; */
       color: black;
       margin: 2px;
     }

     }
  }

`;

function Weather(){
    const { url, path } = useRouteMatch();
    const [ toggle, setToggle ] = useState(false);
    const [ JSO, setJSO ] = useState([]);
    const [ v1, setV1 ] = useState([]);
    const [ v2, setV2 ] = useState([]);
    const [ v3, setV3 ] = useState([]);
    const [ v4, setV4 ] = useState([]);
    const [ v5, setV5 ] = useState([]);
    const [ v6, setV6 ] = useState([]);
    const [ v7, setV7 ] = useState([]);
    const api = "https://api.nasa.gov/insight_weather/?api_key=c872L3iRHOM9jlIPxbLTb0hgRk1q87Cs0jmDBcPh&feedtype=json&ver=1.0";
    var arr = [];

    const openClose = () => {
        setToggle(!toggle);
    };

    const drawer = css`

        visibility: ${toggle ? 'visible' : 'hidden'};
        display: inline-block;
        /* //display: ${toggle ? 'none' : 'block'}; */

    `;

    useEffect(() => {
        async function fetchSearchResults(){
            const response = await fetch(api);
            const responseData = await response.json();
            setJSO(responseData || []);
            setV1(responseData["451"] || []);
            setV2(responseData["452"] || []);
            setV3(responseData["453"] || []);
            setV4(responseData["454"] || []);
            setV5(responseData["455"] || []);
            setV6(responseData["456"] || []);
            setV7(responseData["457"] || []);
        }
        fetchSearchResults();
    }, api);

    for (var key in JSO.sol_keys){
        arr.push(JSO.sol_keys[key]);
    }

   var va1 = [];
   var va2 = [];
   var va3 = [];
   var va4 = [];
   var va5 = [];
   var va6 = [];
   var va7 = [];

   for ( key in v1.AT){
      va1.push(v1.AT[key]);
   }

   for ( key in v2.AT){
      va2.push(v2.AT[key]);
   }

   for ( key in v3.AT){
      va3.push(v3.AT[key]);
   }

   for ( key in v4.AT){
      va4.push(v4.AT[key]);
   }

   for ( key in v5.AT){
      va5.push(v5.AT[key]);
   }

   for ( key in v6.AT){
     va6.push(v6.AT[key]);
   }

   for ( key in v7.AT){
     va7.push(v7.AT[key]);
   }

    const temporary = css`
        background-color: white;
        border: none;
    `;

    // <button onClick={openClose} css={temporary}> Drawer </button>
    // <Drawer className="drawer" css={drawer}>
    //     <ul>
    //         <li>
    //             <Link to={`${url}/${arr[0]}`}><button css={buttonStyle1}>SOL {arr[0]}</button></Link>
    //             <Link to={`${url}/${arr[1]}`}><button css={buttonStyle2}>SOL {arr[1]}</button></Link>
    //             <Link to={`${url}/${arr[2]}`}><button css={buttonStyle3}>SOL {arr[2]}</button></Link>
    //             <Link to={`${url}/${arr[3]}`}><button css={buttonStyle4}>SOL {arr[3]}</button></Link>
    //             <Link to={`${url}/${arr[4]}`}><button css={buttonStyle5}>SOL {arr[4]}</button></Link>
    //             <Link to={`${url}/${arr[5]}`}><button css={buttonStyle6}>SOL {arr[5]}</button></Link>
    //             <Link to={`${url}/${arr[6]}`}><button css={buttonStyle7}>SOL {arr[6]}</button></Link>
    //         </li>
    //     </ul>
    // </Drawer>

    return (
        <div className="header" css={headerStyle}>
        <div>
            <h1 css={fontStyle}> Weather </h1>

        </div>
        <div className="parent" css={parentStyle}>
            <h3 css={fontStyle}> Please select a day of the week:</h3>
            <Popup modal trigger={<button css={buttonStyle1}>SOL {arr[0]}</button>} css={popupStyle}>
                <div css={modalStyle}>
                    <h2> SOL {arr[0]} </h2>
                    <h3> {va1[0]} ℉</h3>
                    <div>
                        Low: {va1[2]} ℉
                    </div>
                    <div>
                        High: {va1[3]} ℉
                    </div>
                </div>
            </Popup>
            <Popup modal trigger={<button css={buttonStyle2}>SOL {arr[1]}</button>} css={popupStyle}>
                 <div css={modalStyle}>
                   <h2> SOL {arr[1]} </h2>
                   <h3> {va2[0]} ℉</h3>
                   <div>
                       Low: {va2[2]} ℉
                   </div>
                   <div>
                       High: {va2[3]} ℉
                   </div>
                </div>
            </Popup>
            <Popup modal trigger={<button css={buttonStyle3}>SOL {arr[2]}</button>} css={popupStyle}>
                <div css={modalStyle}>
                  <h2> SOL {arr[2]} </h2>
                  <h3> {va3[0]} ℉</h3>
                  <div>
                      Low: {va3[2]} ℉
                  </div>
                  <div>
                      High: {va3[3]} ℉
                  </div>
                </div>

            </Popup>
            <Popup modal trigger={<button css={buttonStyle4}>SOL {arr[3]}</button>} css={popupStyle}>
                <div css={modalStyle}>
                  <h2> SOL {arr[3]} </h2>
                  <h3> {va4[0]} ℉</h3>
                  <div>
                      Low: {va4[2]} ℉
                  </div>
                  <div>
                      High: {va4[3]} ℉
                  </div>
                </div>
            </Popup>
            <Popup modal trigger={<button css={buttonStyle5}>SOL {arr[4]}</button>} css={popupStyle}>
                 <div css={modalStyle}>
                   <h2> SOL {arr[4]} </h2>
                   <h3> {va5[0]} ℉</h3>
                   <div>
                       Low: {va5[2]} ℉
                   </div>
                   <div>
                       High: {va5[3]} ℉
                   </div>
                </div>
            </Popup>
            <Popup modal trigger={<button css={buttonStyle6}>SOL {arr[5]}</button>} css={popupStyle}>
                <div css={modalStyle}>
                  <h2> SOL {arr[5]} </h2>
                  <h3> {va6[0]} ℉</h3>
                  <div>
                      Low: {va6[2]} ℉
                  </div>
                  <div>
                      High: {va6[3]} ℉
                  </div>
                </div>
            </Popup>
            <Popup modal trigger={<button css={buttonStyle7}>SOL {arr[6]}</button>} css={popupStyle}>
                <div css={modalStyle}>
                  <h2> SOL {arr[6]} </h2>
                  <h3> {va7[0]} ℉</h3>
                  <div>
                      Low: {va7[2]} ℉
                  </div>
                  <div>
                      High: {va7[3]} ℉
                  </div>
                </div>

            </Popup>
        </div>
        </div>
    );
}

export default Weather;
