import React from 'react';
import twitter from './assets/img/twitter.png';
import facebook from './assets/img/facebook.png';
import git21 from './assets/img/git21.png';
import './App.css';
import Header from './components/header/header.component';
import Body from './components/body/body.component';

function App() {
  return (
    <div className="App">
      <div className="figure">
      </div>
      <div className="figure1">
      </div>
      <Header></Header>
      <Body></Body>
      <div className="imgReferences">
        <a href="#"><img src={twitter}/></a>
        <a href="#"><img src={facebook}/></a>
        <a href="#"><img src={git21}/></a>
      </div>
    </div>
  );
}

export default App;
