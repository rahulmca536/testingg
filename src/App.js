import './App.css';
import React, {Fragment, useContext, useEffect, useState} from 'react';

function App() {

  const [red, setred] = React.useState(0);
  const [blue, setblue] = React.useState(0);
  const [black, setblack] = React.useState(1);
  const [but1, setbut1] = React.useState(0);
  const [but2, setbut2] = React.useState(0);
  const [but3, setbut3] = React.useState(0);
  const [but4, setbut4] = React.useState(0);
  const [but5, setbut5] = React.useState(0);



  const blueStyle = {
    color: 'blue'
  };
  const redStyle = {
    color: 'red'
  };
  const blackStyle = {
    color: 'black'
  };

  function change(x){
    if(x==1){
      setbut1(1);
      setbut2(0);
      setbut3(0);
      setbut4(0);
      setbut5(0);
    }
    if(x==2){
      setbut1(2);
      setbut2(1);
      setbut3(0);
      setbut4(0);
      setbut5(0);
    }
    if(x==3){
      setbut1(2);
      setbut2(2);
      setbut3(1);
      setbut4(0);
      setbut5(0);
    }
    if(x==4){
      setbut1(2);
      setbut2(2);
      setbut3(2);
      setbut4(1);
      setbut5(0);
    }
    if(x==5){
      setbut1(2);
      setbut2(2);
      setbut3(2);
      setbut4(2);
      setbut5(1);
    }
   
  }

  return (
    <div className="App">
 <h2 onClick={()=>change(1)}>{but1 ===0 &&(<p style={blackStyle}>*</p>)}{but1 ===1 &&(<p style={redStyle}>*</p>)}{but1 ===2 &&(<p style={blueStyle}>*</p>)}</h2>
 <h2 onClick={()=>change(2)}>{but2 ===0 &&(<p style={blackStyle}>*</p>)}{but2 ===1 &&(<p style={redStyle}>*</p>)}{but2 ===2 &&(<p style={blueStyle}>*</p>)}</h2>
 <h2 onClick={()=>change(3)}>{but3 ===0 &&(<p style={blackStyle}>*</p>)}{but3 ===1 &&(<p style={redStyle}>*</p>)}{but3 ===2 &&(<p style={blueStyle}>*</p>)}</h2>
 <h2 onClick={()=>change(4)}>{but4 ===0 &&(<p style={blackStyle}>*</p>)}{but4 ===1 &&(<p style={redStyle}>*</p>)}{but4 ===2 &&(<p style={blueStyle}>*</p>)}</h2>
 <h2 onClick={()=>change(5)}>{but5 ===0 &&(<p style={blackStyle}>*</p>)}{but5 ===1 &&(<p style={redStyle}>*</p>)}{but5 ===2 &&(<p style={blueStyle}>*</p>)}</h2>

    </div>
  );
}

export default App;
