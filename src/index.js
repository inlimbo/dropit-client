import L from 'leaflet'

//global map index :D
var map


//get geolocation of the user
const mockLocation = {
  latitude: '11.2544',
  longitude: '75.7798'
}

setupMap(mockLocation)


function setupMap(location) {
  map = L.map('map').setView([location.latitude, location.longitude], 17)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)
  L.marker([location.latitude, location.longitude]).addTo(map)
    .bindPopup('You are here')
    .openPopup()
}
