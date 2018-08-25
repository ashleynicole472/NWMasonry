import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.js';
import WelcomeSign from './Components/WelcomeSign/WelcomeSign.js';
import About from './Components/AboutUs/AboutUs.js';
import Reviews from './Components/CustomerReviews/Reviews.js';
import Services from './Components/ConstructionServices/ConstructionServices.js';
import Gallery from './Components/ProjectGallery/ProjectGallery.js';
import Footer from './Components/Footer/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                    <Route path='/' component={WelcomeSign} exact />
                    <Route path='/' component={Reviews} exact />
                    <Route path='/' component={About} exact />
                    <Route path='/AboutUs' component={About} />
                    <Route path='/ProjectGallery' component={Gallery} exact />
                    <Route path='/ConstructionServices' component={Services} />
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
