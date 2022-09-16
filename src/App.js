import logo from './logo.svg';
import './App.css';
import React from "react";

function  Hello(prop){
  return (
      <div id='hello'>
        hello world, {prop.name}
      </div>
  )
}

function App() {
    const [count,setCount]=React.useState(0)
    function update(){
        setCount(count+1)
    }
  return (
      <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
          <Hello/>
    <button onClick={update}>Click to count</button>
          {count}
      </div>
  );
}


export default function App_attach(){
    return(
        <div>
            <App/>
            <Hello name="lyy"/>
        </div>
    )
};
