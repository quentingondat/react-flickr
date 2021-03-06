import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Map from './containers/Map'
import Feed from './containers/Feed'
import Navbar from './containers/Navbar'

import API from './utils/API'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      location: {
        lat: 48.8566,
        lng: 2.3522
      },
      photos: [],
      focus: null,
      searchValue: ''
    }
  }

  componentDidMount () {
    const params = { location: this.state.location }
    API.get(params, (error, response) => {
      if (error) {
        return
      }
      API.getLocation(response.body.photos.photo, (err, geoPhotos) => {
        if (err) {
          return
        }
        setTimeout(() => {
          let updatedState = Object.assign({}, this.state)
          updatedState.photos = geoPhotos
          this.setState(updatedState)
        }, 300)
      })
    })
  }

  updatePhotos (location) {
    const params = { location: location }
    API.get(params, (error, response) => {
      if (error) {
        return
      }
      API.getLocation(response.body.photos.photo, (err, geoPhotos) => {
        if (err) {
          return
        }
        let updatedState = Object.assign({}, this.state)
        setTimeout(() => {
          updatedState.photos = geoPhotos
          updatedState.location = location
          this.setState(updatedState)
        }, 300)
        updatedState.photos = geoPhotos
        updatedState.location = location
        this.setState(updatedState)
      })
    })
  }

  changeFocus (index) {
    let updatedState = Object.assign({}, this.state)
    updatedState.active_marker = index
    this.setState(updatedState)
  }

  onChange (event) {
    let updatedState = Object.assign({}, this.state)
    updatedState.searchValue = event.target.value
    this.setState(updatedState)
  }

  onSearch (event) {
    event.preventDefault()
    API.geocode(this.state.searchValue, (error, response) => {
      if (error) {
        return
      }
      this.updatePhotos(response.body.results[0].geometry.location)
    })
  }

  render () {
    return (
      <div className={'app-container'}>
        <Navbar onSearch={this.onSearch.bind(this)} onChange={this.onChange.bind(this)} />
        <div className={'feed-container'}>
          <Feed photos={this.state.photos} changeFocus={this.changeFocus.bind(this)} />
        </div>
        <div className={'map-container'}>
          <Map center={this.state.location} markers={this.state.photos} active_marker={this.state.active_marker} updateMarkers={this.updatePhotos.bind(this)} />
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('react-app'))
