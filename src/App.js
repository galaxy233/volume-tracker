import React, { Component } from 'react';
import VolumeData from './VolumeData';
import CoinView from './CoinView';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/:pair' component={CoinView}/>
        </div>
      </Router>
    )
  }
}

export default App;
