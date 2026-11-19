mapboxgl.accessToken = mapToken;

if (!listing.geometry || !listing.geometry.coordinates || listing.geometry.coordinates.length < 2) {
  document.getElementById("map").innerHTML =
    "<p class='text-muted p-3'>Map location not available for this listing.</p>";
} else {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // [lng, lat]
    zoom: 9,
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`,
      )
    )
    .addTo(map);
}
