import superagent from 'superagent'
import config from '../../../config'

export default {
  get: (params, callback) => {
    var lat = params.location.lat
    var lng = params.location.lng
    var url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.flickrApiKey}&has_geo=1&lat=${lat}&lon=${lng}&per_page=30&page=1&format=json&nojsoncallback=1&radius=0.4`
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, response) => {
      callback(err, response)
    })
  },

  getLocation: (photos, callback) => {
    var geoPhotos = []
    photos.forEach((photo, i) => {
      var url = `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${config.flickrApiKey}&photo_id=${photo.id}&format=json&nojsoncallback=1&radius=0.4`
      superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((err, response) => {
          if (err) {
            callback(err, null)
          }
          photo.position = { lat: parseFloat(response.body.photo.location.latitude), lng: parseFloat(response.body.photo.location.longitude) }
          geoPhotos.push(photo)
        })
    })
    callback(null, geoPhotos)
  },

  geocode: (value, callback) => {
    var address = value.replace(' ', '+')
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.geocodeApiKey}`
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, response) => {
      callback(err, response)
    })
  }
}
