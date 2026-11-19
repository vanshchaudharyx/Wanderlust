mapboxgl.accessToken = mapToken;

if (!listing.geometry || !listing.geometry.coordinates || listing.geometry.coordinates.length < 2) {
  document.getElementById("map").innerHTML =
    "<p class='text-muted p-3'>Map location not available for this listing.</p>";
} else {
  // Determine initial map style based on current data-bs-theme
  const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
  const initialStyle = currentTheme === "dark" 
    ? "mapbox://styles/mapbox/dark-v11" 
    : "mapbox://styles/mapbox/streets-v12";

  const map = new mapboxgl.Map({
    container: "map",
    style: initialStyle,
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

  // Listen to custom themeChange event dispatched by theme toggle button
  window.addEventListener("themeChange", (e) => {
    const newTheme = e.detail && e.detail.theme;
    if (newTheme === "dark") {
      map.setStyle("mapbox://styles/mapbox/dark-v11");
    } else {
      map.setStyle("mapbox://styles/mapbox/streets-v12");
    }
  });
}
