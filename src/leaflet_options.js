'use strict';

var L = require('leaflet');

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  }),
  osm_de = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  }),
  hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {}),
  bike = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {});

module.exports = {
  defaultState: {
    center: L.latLng(38.8995,-77.0269),
    zoom: 13,
    waypoints: [],
    language: 'en',
    alternative: 0,
    layer: streets
  },
  services: [{
    label: 'Car (fastest)',
    path: 'https://router.project-osrm.org/route/v1'
  }],
  layer: [{
    'openstreetmap.org': osm,
    'openstreetmap.de.org': osm_de
  }],
  overlay: {
    'hiking': hiking,
    'bike': bike
  },
  nominatim:{
    url:'//nominatim.openstreetmap.org/'
  },
  baselayer: {
    one: osm,
    two: osm_de
  }
};
