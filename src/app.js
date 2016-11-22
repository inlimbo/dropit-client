import {log} from 'helper';
import L from 'leaflet';
//import {locationModule} from './location';
//global map index :D
var map;

//var location =new locationModule(100)
//get geolocation of the user
const mockLocation = {
    latitude: '11.2544',
    longitude: '75.7798'
}

setupMap(mockLocation)


function setupMap(location) {
    map = L.map('map').setView([location.latitude, location.longitude], 17)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    L.marker([location.latitude, location.longitude]).addTo(map)
        .bindPopup('You are here')
        .openPopup()

    L.circleMarker([mockLocation.latitude,mockLocation.longitude]).addTo(map);
    //location.isEnabled();
}