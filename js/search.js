function onSearchClick() {
  document.getElementById("search_text").innerText = "Search for a student here:";
  var search = document.getElementById("s_search").value.toLowerCase();
  var found = false;
  markers.forEach(marker => {
    if (marker._popup._content.toLowerCase().includes(search)) {
      map.setView([marker._latlng.lat, marker._latlng.lng], 15);
      found = true;
      return;
    }
  })
  if (!found) {
    document.getElementById("search_text").innerText = "Student not found";
  }
}
  
