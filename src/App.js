import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from './helper/history';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="App">
          <Navbar />
          <LandingPage history={history} />
      </div>
      </Router>
    );
  }
}

export default App;
