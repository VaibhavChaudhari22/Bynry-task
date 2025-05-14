import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'process.env.MAP_TOKEN';

function MapView({ lat, lng }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 10,
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    return () => map.remove();
  }, [lat, lng]);

  return <div id="map" className="w-full h-64 mt-4" />;
}

export default MapView;
