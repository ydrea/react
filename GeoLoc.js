import React, { Component } from 'react'
export default class App extends Component {
  state={ lat: null, lon: null, errorM: '' }

componentDidMount() {   
  window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude,
        lon: position.coords.longitude}), 
        err => this.setState ({errorM: err.message})
    );
  }
  render() {
    if (this.state.lat
      && this.state.lon
      && !this.state.errorM) {
    return (<div> Lat: {this.state.lat}, Lon: {this.state.lon}</div>)} 
      else if (!this.state.lat) {
        return (<div> {this.state.errorM} </div>)
      } else {
        return (
          <div> Loading... </div>
        )
      }
  }
};

