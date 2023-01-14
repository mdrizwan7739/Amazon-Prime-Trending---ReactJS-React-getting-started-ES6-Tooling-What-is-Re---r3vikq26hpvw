import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data.js';

const App=()=> {
  let [state, setState] = useState(0);
  let [num, newnum] = useState(0);
  return (
    <>

      <button data-testid="button-prev" disabled={num === 0 ? true : false} onClick={() => { setState(state - 1); newnum(num - 1) }}>Prev</button>
      <button data-testid="button-next" disabled={num === 4 ? true : false} onClick={() => { setState(state + 1); newnum(num + 1) }}>Next</button>
      <button data-testid="button-restart" disabled={num === 0 ? true : false} onClick={() => { setState(0); newnum(0) }}>Restart</button>
      <h1 data-testid="title">{slides[state].title}</h1>
      <p data-testid="text">{slides[state].text}</p>
    </>
  );


}

export default App;
