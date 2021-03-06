import React, { Component } from 'react';
import { ConnectedRestaurantInput } from './components/RestaurantInput';
import { ConnectedRestaurants } from './components/Restaurants';

import { connect } from 'react-redux'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRestaurantInput />
        <ConnectedRestaurants />
      </div>
    );
  }
};



export default App;
