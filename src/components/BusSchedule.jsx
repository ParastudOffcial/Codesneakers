// src/components/RouteDetails.jsx
import React from 'react';

const BusSchedule = () => {
  const [routeDetails, setRouteDetails] = React.useState({
    routeId: '',
    origin: '',
    destination: '',
  });

  const handleRouteChange = (e) => {
    const routeId = e.target.value;
    // Simulate fetching route details based on route ID
    const routes = {
      '101': { origin: 'Station A', destination: 'Station B' },
      '102': { origin: 'Station C', destination: 'Station D' },
    };
    const details = routes[routeId] || { origin: '', destination: '' };
    setRouteDetails({ routeId, ...details });
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 animate-bounce">Bus Scheduling</h2>
      <p className="mb-4">Enter the route number to view the schedule:</p>
      <input
        type="text"
        className="w-full p-2 mb-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        placeholder="Enter Route Number"
        onChange={handleRouteChange}
      />
      {routeDetails.routeId && (
        <div className="mt-4 p-4 bg-gray-700 rounded-md transition-opacity duration-500 ease-in-out opacity-100">
          <h3 className="text-xl font-semibold mb-2">Route Details:</h3>
          <p>Route ID: {routeDetails.routeId}</p>
          <p>Origin: {routeDetails.origin}</p>
          <p>Destination: {routeDetails.destination}</p>
        </div>
      )}
    </div>
  );
};

export default BusSchedule;
