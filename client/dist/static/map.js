var map = L.map('map',{
      center: [6.174469,-75.584556],
      zoom: 15,
      minZoom: 2,
      maxZoom: 18
    });

    // L.tileLayer('http://{s}.tiles.mapbox.com/v3/mandym.0417cffe/{z}/{x}/{y}.png',{attribution: "Mapbox"}).addTo(map);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mandym.0417cffe',
        accessToken: 'pk.eyJ1IjoibWFuZHltIiwiYSI6InJ0N0t5UzQifQ.QuC-ffTnnah5oonnfh-hlQ'
    }).addTo(map);

    // adding data points

    var teardrop = new 
    L.Icon({
      iconUrl: "images/marker-icon.png"
    });

    function baseLayer (feature,layer) {
      layer.bindPopup("<h1>" + feature.properties.Title + "</h1>");
      layer.setIcon(teardrop);
    };

    L.geoJson(seeds,{
      onEachFeature: baseLayer
    }).addTo(map);
    var map = L.map('map',{
      center: [6.174469,-75.584556],
      zoom: 15,
      minZoom: 2,
      maxZoom: 18
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mandym.0417cffe',
        accessToken: 'pk.eyJ1IjoibWFuZHltIiwiYSI6InJ0N0t5UzQifQ.QuC-ffTnnah5oonnfh-hlQ'
    }).addTo(map);

    // adding data points

    var teardrop = new 
    L.Icon({
      iconUrl: "images/marker-icon.png"
    });

    function baseLayer (feature,layer) {
      layer.bindPopup("<h1>" + feature.properties.Title + "</h1>");
      layer.setIcon(teardrop);
    };

    L.geoJson(seeds,{
      onEachFeature: baseLayer
    }).addTo(map);