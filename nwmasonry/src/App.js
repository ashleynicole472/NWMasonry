import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import WelcomeSign from './Components/WelcomeSign/WelcomeSign.js';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <WelcomeSign />
      </div>
    );
  }
}

export default App;
