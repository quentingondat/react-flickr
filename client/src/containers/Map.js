import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
  constructor() {
    super()
    this.state = {
        photos: [],
        active_marker: null,
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
    const mapContainer = <div style = {{height: '100%', width: '100%'}}></div>
    const markers = this.props.markers.map((marker, i) => {
      return <Marker
                key={i}
                {...marker}
                onClick={() => {this.onMarkerClick(marker)}}/>
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
                options={{streetViewControl: false, mapTypeControl: false, styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]}} >
                { markers }
              </GoogleMap>
            }/>
      )
  }
}

export default Map
