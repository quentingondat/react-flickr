import React, { Component } from 'react';

import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
  constructor() {
    super()
    this.state = {
        photos: []
      }
    }

  mapMoved() {
    let updatedState = Object.assign({}, this.state)
    updatedState.active_marker = null
    this.setState(updatedState)
    let location = {
      lat: this.state.map.getCenter().lat(),
      lng: this.state.map.getCenter().lng()
    }
    this.props.updateMarkers(location)
  }

  render() {
    var yellow_icon = {

        path: "M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",
        fillColor: '#FCBA04',
        fillOpacity: 1,

        strokeWeight: 0,
        scale: 0.8
    }

    var red_icon = {

        path: "M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",
        fillColor: '#A50104',
        fillOpacity: 1,

        strokeWeight: 0.1,
        scale: 1
    }

    const mapContainer = <div style = {{height: '100%', width: '100%'}}></div>

    const markers = this.props.markers.map((marker, i) => {

      if (this.props.active_marker == i) {
        var icon = red_icon
        var zIndex = 99999999
      } else {
        var icon = yellow_icon
        var zIndex = 1
      }

      return (<Marker
                key={i}
                {...marker}
                icon={icon}
                z-index={zIndex}
                />)
    })




    return (
          <GoogleMapLoader
            containerElement = { mapContainer }
            googleMapElement = {
              <GoogleMap
                ref = { (map) => {
                  if (this.state.map != null)
                    return
                  this.setState({
                    map: map
                  })
                }}
                onDragend={this.mapMoved.bind(this)}
                defaultZoom={15}
                defaultCenter={this.props.center}
                options={{streetViewControl: false, mapTypeControl: false, styles: [{"elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"landscape","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{}]}} >
                { markers }
              </GoogleMap>
            }/>
      )
  }
}

export default Map
