import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from '../components/Card'

class Feed extends Component {
  constructor() {
    super()
    this.state = {
        photos: [],
        active_marker: null
      }
    }

  render() {

    const photos = this.props.photos.map((photo, i) => {
      var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
      var image = { backgroundImage: "url(" + url + ")" }
      return (
        <Card key={i} index={i} changeFocus={this.props.changeFocus.bind(this)} image={image} />
      )
    })

    return (
        <div>

            { photos }

        </div>
      )
  }
}

export default Feed
