import React, { Component } from 'react';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import Reviews from './components/CustomerReviews/reviews.js';
import Footer from './components/Footer/footer.js'
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
