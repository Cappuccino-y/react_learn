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
    const [cal,setAns]=React.useState({
        num1:3,
        num2:4,
        response:''
    })
    function update(){
        setCount(count+1)
    }
    function answer(event){
        setAns({...cal,response:event.target.value})
    }
    function inputPress(event) {
        console.log(event.target.value)
        if (event.key=== 'Enter') {
            const answer=parseInt(cal.response)
            if (answer=== (cal.num1 + cal.num2)) {
                alert("Right")
            } else {
                alert('Wrong')
            }
            setAns({...cal, response: ''})
        }
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
    <p >{cal.num1}+{cal.num2}?</p>
    <input onKeyPress={inputPress} onChange={answer} value={cal.response}/>
    <button  onClick={update}>Click to count</button>
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
