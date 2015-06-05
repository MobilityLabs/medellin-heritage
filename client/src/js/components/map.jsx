'use strict';

var React    = require('react');
var MapStore = require('../stores/mapStore');
var Reflux   = require('reflux');

var Map = React.createClass({
  // getInitialState: function () {
  //   return {
  //     heritageItems: MapStore.getHeritageItems()
  //   };
  // },
  
  mixins: [Reflux.listenTo(MapStore, 'onMapStore')],

  // onMapStore: function () {
  //   debugger;
  //   this.map.featureLayer.setFilter(function (item) { 
  //     console.log(item);
  //     return true;
  //   });
  // },

  componentDidMount: function () {
    var items = MapStore.getHeritageItems();
    var map = this.map = L.map(this.getDOMNode(), {
      center: [6.237, -75.579],
      zoom: 15,
      minZoom: 2,
      maxZoom: 18
    });

    L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'rickymetz.9458305e',
        accessToken: 'pk.eyJ1Ijoicmlja3ltZXR6IiwiYSI6IjQ0MDkxNWJiOTU0ZWJmMzNkMGVlODZiOWM0ODgwNmMwIn0.n3vqv0FdFTjASE09SDiUSg'
      }
    ).addTo(map);

    var marker = new L.Icon({
      iconUrl: 'images/marker-icon.png'
    });

    function content (feature, layer) {
      layer.bindPopup(
        '<div class="container">' +
          '<div class="row gallery">' +
            '<div>' + feature.properties.ImageName + '</div>' + 
          '</div>' +
          '<div class="row info">' +
            '<div class="details col-md-6 col-sm-12">' + 
              '<p id="title">' + feature.properties.Title + '</p>' + 
              '<p id="author">' + feature.properties.Author + '</p>' + 
              '<p id="year">' + feature.properties.Year + '</p>' + 
            '</div>' +
            '<div class="sharing col-md-6 col-sm-12">' +
              '<div class="row">' +
                '<div class="col-md-4"><p>Share</p></div>' +
                '<div class="col-md-4"><p>Learn More</p></div>' +
                '<div class="col-md-4"><p>Directions</p></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
        );
      layer.setIcon(marker);
    };

    L.geoJson(items, {onEachFeature: content}).addTo(map);
  },

  render: function () {
    return (
      <div className="map"></div>
    );
  }

});

module.exports = Map;