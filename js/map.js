function initMap() {
  const newark = { lat: 40.740, lng: -74.174 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: newark,
  });
  const marker = new google.maps.Marker({
    position: newark,
    map: map,
  });
}