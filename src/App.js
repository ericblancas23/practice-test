import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { history } from './helper/history';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LandingPage history={history} />
          <Navbar />
      </div>
    );
  }
}

export default App;
