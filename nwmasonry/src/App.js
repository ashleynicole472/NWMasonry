import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import WelcomeSign from './Components/WelcomeSign/WelcomeSign.js';
import About from './Components/AboutUs/AboutUs.js';
import Footer from './Components/Footer/Footer.js';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <WelcomeSign />
        <Footer />
      </div>
    );
  }
}

export default App;
