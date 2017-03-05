import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Map from './containers/Map'
import Feed from './containers/Feed'

import API from './utils/API'

class App extends Component {
  constructor() {
    super()
    this.state = {
        location: {
          lat: 48.8584,
          lng: 2.2945
        },
        photos: [],
        focus: null
      }
    }

  componentDidMount() {
    const params = { location: this.state.location }
    API.get(params, (error, response) => {
      API.getLocation(response.body.photos.photo, (geoPhotos) => {
        setTimeout(() => {
          let updatedState = Object.assign({}, this.state)
          updatedState.photos = geoPhotos
          this.setState(updatedState)
        }, 300);
      })
    })
  }

  updatePhotos(location) {
    const params = { location: location }
    API.get(params, (error, response) => {
      API.getLocation(response.body.photos.photo, (geoPhotos) => {
        let updatedState = Object.assign({}, this.state)
        setTimeout(() => {
          updatedState.photos = geoPhotos
          updatedState.location = location
          this.setState(updatedState)
        }, 300);
        updatedState.photos = geoPhotos
        updatedState.location = location
        this.setState(updatedState)
      })
    })
  }

  changeFocus(index) {
    let updatedState = Object.assign({}, this.state)
    updatedState.active_marker = index
    this.setState(updatedState)
  }

  render() {
    return (
        <div className="app-container">
          <div className="feed-container">
            <Feed photos={this.state.photos} changeFocus={this.changeFocus.bind(this)}/>
          </div>
          <div className="map-container">
            <Map center={this.state.location} markers={this.state.photos} active_marker={this.state.active_marker} updateMarkers={this.updatePhotos.bind(this)} />
          </div>
        </div>
      )
  }
}

ReactDom.render(<App />, document.getElementById('react-app'));
