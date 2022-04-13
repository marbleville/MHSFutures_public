let MHSlat = 42.4924;
let MHSlong = -70.8692;
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
$.getJSON("info/locations.json", (data) => {
  $.getJSON("info/schools.json", (schools) => {
    let numPeople = 0;
    for (const school of schools) {
      let p = school.people.split("\n");
      numPeople += p.length - 1;
    }
    let distances = [];
    for (const school in data) {
      distances.push(
        getDistanceFromLatLonInKm(
          MHSlat,
          MHSlong,
          data[school].lat,
          data[school].long
        )
      );
    }
    let sum = 0;
    distances.forEach((distance) => {
      sum += distance;
    });
    let kmTomi = 1.60934;
    let d = sum / distances.length / kmTomi;
    document.getElementById("info").innerText = `Average Distance from MHS: ${
      d.toString().split(".")[0]
    } miles\nNumber of People Mapped: ${numPeople}\nNumber of Schools: ${
      schools.length
    }`;
  });
});
