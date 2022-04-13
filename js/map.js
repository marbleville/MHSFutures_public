var map = L.map("map").setView([38, -95], 5);
var markers = [];
var tiles = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution: "Written by Allen Ehrhardt and Jeffrey Lederman",
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

$.getJSON("info/schools.json", (data) => {
  $.getJSON("info/locations.json", (loc) => {
    data.forEach((school) => {
      let p = school.people.split(",\n").join("<br />");
      let k = p.substring(0, p.length - 2);
      marker = new L.marker([loc[school.name].lat, loc[school.name].long])
        .addTo(map)
        .bindPopup(`<b>${school.name}</b><br />${k}`);
      markers.push(marker);
    });
    //console.log(markers[1]._popup._content.includes('Matthew Cannuscio'));
  });
});
