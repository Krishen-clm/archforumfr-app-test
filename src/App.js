import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Voici ma premiere static web app React Js</p>
              <div id='datetime'></div>     
      </header>
    </div>
  );
}

function dateTimer() {
    const element = (<div>{new Date().toLocaleDateString()}</div>);
    ReactDOM.render(
        element,
        document.getElementById('datetime')
    );
}

setInterval(dateTimer, 1000);



export default App;
