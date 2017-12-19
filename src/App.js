import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css';


const position = [51.505, -0.09]
class App extends Component {
  render() {
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          id="darkowlzz.94db14bd"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFya293bHp6IiwiYSI6IjNlNzMyNjAxNzg5MjY3MGRhZDY1OWQ2YzMxMDQ2MzVjIn0.PRWXV8RkEyAtFr7K4dZDgw"
        />
        <Marker position = {position} >
          <Popup>
            <span> A pretty CSS3 popup <br/> Easily customizable </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;
