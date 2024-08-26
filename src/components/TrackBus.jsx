// src/components/TrackBus.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TrackBus = () => {
  const position = [51.505, -0.09]; // Example coordinates

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Track Bus</h2>
      <p>Here you can track the current location of a bus.</p>
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Bus Location
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default TrackBus;
