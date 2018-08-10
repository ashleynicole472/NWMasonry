import React, { Component } from 'react';
import About from './Components/About/about.js';
import Contact from './Components/Contact/contact.js';
import Reviews from './Components/CustomerReviews/reviews.js';
import Footer from './Components/Footer/footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Contact />
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default App;
