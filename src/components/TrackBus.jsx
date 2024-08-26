import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

// Define your bus icon image URL
const BUS_ICON_URL = 'https://www.wavetransit.com/wp-content/uploads/2017/03/wave-connect-bus-icon-300x300.png';

const TrackBus = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Example initial coordinates
  const [busStops, setBusStops] = useState([]);
  const [routeNo, setRouteNo] = useState('');
  const [busNo, setBusNo] = useState('');
  const [selectedStop, setSelectedStop] = useState(null);
  const mapRef = useRef(null);

  // Define a custom bus icon
  const busIcon = L.icon({
    iconUrl: BUS_ICON_URL,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor relative to the icon
  });

  // Use useCallback to memoize the fetchBusStops function
  const fetchBusStops = useCallback((routeNo, busNo) => {
    // Simulate fetching bus stops data based on route number or bus number
    const stops = [
      { name: 'Stop 1', position: [51.505, -0.08], distance: 200 },
      { name: 'Stop 2', position: [51.51, -0.09], distance: 500 },
      { name: 'Stop 3', position: [51.515, -0.1], distance: 900 }
      // Add more stops as needed
    ];

    // Calculate initial distances from the starting position
    const updatedStops = stops.map(stop => ({
      ...stop,
      distance: calculateDistance(position, stop.position)
    }));

    setBusStops(updatedStops);
  }, [position]);

  // Update bus position and calculate distances
  const updateBusPosition = useCallback(() => {
    setPosition(prevPosition => {
      // Simulate movement by slightly altering the current position
      const newLat = prevPosition[0] + 0.0001;
      const newLng = prevPosition[1] + 0.0001;
      const newPosition = [newLat, newLng];

      // Update distances for each stop based on new position
      const updatedStops = busStops.map(stop => {
        const distance = calculateDistance(newPosition, stop.position);
        return { ...stop, distance };
      });
      setBusStops(updatedStops);

      return newPosition;
    });
  }, [busStops]);

  useEffect(() => {
    if (busStops.length > 0) {
      // Simulate bus movement along the route
      const interval = setInterval(() => {
        updateBusPosition();
      }, 2000); // Update every 2 seconds

      return () => clearInterval(interval);
    }
  }, [busStops, updateBusPosition]);

  const calculateDistance = (pos1, pos2) => {
    const [lat1, lng1] = pos1;
    const [lat2, lng2] = pos2;
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // in meters
    return Math.round(distance); // Return distance rounded to the nearest meter
  };

  const RoutingControl = ({ stops }) => {
    const map = useMap();

    useEffect(() => {
      if (!map || stops.length === 0) return;

      const waypoints = stops.map(stop => L.latLng(stop.position));

      const routingControl = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
        }
      }).addTo(map);

      return () => map.removeControl(routingControl);
    }, [map, stops]);

    return null;
  };

  const handleSearch = () => {
    fetchBusStops(routeNo, busNo);
  };

  const handleStopClick = (stop) => {
    setSelectedStop(stop);
    setPosition(stop.position); // Optionally move the map center to the selected stop
  };

  return (
    <div className="relative p-6 bg-gradient-to-br from-white via-gray-500 via-slate-400 to-slate-400 min-h-screen bg-gradient-to-r">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
    🚍 <span className="text-pink-600">Track Your Bus in Real-Time!</span>
  </h2>
  <p className="text-gray-800 mb-6 text-lg leading-relaxed">
    With our <strong className="text-red-600">TrackBus</strong> feature, effortlessly monitor the current location of your bus, view its live route, and get up-to-date information on all nearby bus stops. Whether you're heading to work, school, or just out and about, we make your commute easier and more reliable.
  </p>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Features:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li className="text-gray-700 text-lg">
        <strong className="text-pink-600">Real-Time Bus Tracking:</strong> Watch the bus move along its route as it happens.
      </li>
      <li className="text-gray-700 text-lg">
        <strong className="text-pink-600">Detailed Route Maps:</strong> View the full route and all stops to plan your journey better.
      </li>
      <li className="text-gray-700 text-lg">
        <strong className="text-pink-600">Instant Stop Information:</strong> Click on any bus stop to see its name, distance from your location, and more.
      </li>
    </ul>
  </div>

      <div className="flex space-x-4 mb-6 items-center">
        <div className="w-full max-w-xs p-4">
          <label className="block text-2xl font-medium text-gray-700">Route No.</label>
          <input
            type="text"
            value={routeNo}
            onChange={(e) => setRouteNo(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-4 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
            placeholder="Enter route number"
          />
        </div>
        <div className="w-full max-w-xs p-4">
          <label className="block font-medium text-gray-700 text-2xl">Bus No.</label>
          <input
            type="text"
            value={busNo}
            onChange={(e) => setBusNo(e.target.value)}
            className="mt-1 block w-full p-4 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
            placeholder="Enter bus number"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white mt-8 px-8 py-4 rounded-md shadow-lg hover:bg-blue-600 transition duration-150"
        >
          Search
        </button>
      </div>

      <div className="relative z-0" style={{ height: '500px', width: '100%' }}>
        <img
          src="https://t3.ftcdn.net/jpg/04/06/47/64/360_F_406476405_AS5GkYPaEtUjTLbynVPmNTXz40WNTkZT.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        />
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={busIcon}>
            <Popup>Current Bus Position</Popup>
          </Marker>
          {busStops.map((stop, index) => (
            <Marker key={index} position={stop.position} eventHandlers={{ click: () => handleStopClick(stop) }}>
              <Popup>{stop.name}</Popup>
            </Marker>
          ))}
          <RoutingControl stops={busStops} />
        </MapContainer>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Bus Stops</h3>
        <ul>
          {busStops.map((stop, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center mb-2">
              <div className="flex-grow">{stop.name}</div>
              <div className="w-full ml-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(stop.distance / 10, 100)}%` }}></div>
              </div>
              <span className="ml-2">{stop.distance} meters</span>
            </li>
          ))}
        </ul>
      </div>

      {selectedStop && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md shadow-lg bg-white">
          <h3 className="text-lg font-semibold text-gray-800">Selected Stop: {selectedStop.name}</h3>
          <p className="text-gray-700">Distance from current location: {selectedStop.distance} meters</p>
        </div>
      )}
    </div>
  );
};

export default TrackBus;
