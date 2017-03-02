import superagent from 'superagent'


export default {
  get: (params, callback) => {
    var lat = params.location.lat
    var lng = params.location.lng
    var url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d0c654dc90f83c4bed5948323fbef98d&has_geo=1&lat=${lat}&lon=${lng}&per_page=30&page=1&format=json&nojsoncallback=1&radius=0.4`
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
      var url = `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=d0c654dc90f83c4bed5948323fbef98d&photo_id=${photo.id}&format=json&nojsoncallback=1&radius=0.4`
      superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((err, response) => {
          photo.position = { lat: parseFloat(response.body.photo.location.latitude), lng: parseFloat(response.body.photo.location.longitude) }
          geoPhotos.push(photo)
        })
    })
    callback(geoPhotos)
  },


  put: () => {

  },

  delete: () => {

  },
}
