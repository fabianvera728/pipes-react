import React from 'react';
import logo from './logo.svg';
import './header.component.css';

class Header extends React.Component{
    render(){
  return (
      <header className="App-header">
          <div>
        <img src={logo} className="App-logo"/>
        <h1>Pipes</h1>
        </div>
        <ul>
            <li><a>Home</a></li>
            <li><a>View</a></li>
            <li><a>What's it</a></li>
            <li><a>Contact</a></li>
        </ul>
      </header>
  );
}
}

export default Header;