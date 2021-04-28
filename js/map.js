function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 40.740, lng: -74.174 },
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.740, lng: -74.174 },
    map: map,
  });
}