import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Photos extends Component {
  constructor() {
    super()
    this.state = {
        photos: []
      }
    }

  render() {

    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const photos = this.props.photos.map((photo, i) => {
      var color_id = getRandomInt(1, 4)
      var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
      return (
        <div className={"card-wrapper"}>
          <div className={`card card-color-${color_id}`} key={i}>
            <img src={url} alt="" height="150" width="150" />
          </div>
        </div>
      )
    })

    return (
        <div>

            { photos }

        </div>
      )
  }
}

export default Photos
