mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  accessToken: mapToken,
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 8, // starting zoom
});

console.log(coordinates);
const marker1 = new mapboxgl.Marker({color:"RED"})
  .setLngLat(coordinates) //Listing.geometry.coordinates
  .addTo(map);
