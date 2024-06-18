import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null); 
  const markerRef = useRef(null);  

  useEffect(() => {
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      console.error('Invalid coordinates:', latitude, longitude);
      return;
    }

    if (!mapRef.current) {
      mapRef.current = L.map('map-container').setView([latitude, longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Add the marker
      markerRef.current = L.marker([latitude, longitude], { icon: redIcon }).addTo(mapRef.current)
        .openPopup();
    }

    return () => {
      // Clean the map when the component is amount se desmonte
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude]);

  return <div id="map-container" className="h-96 rounded-lg shadow-md"></div>;
};

export default MapComponent;
