import React, { useEffect, useState } from 'react';
import { FaBus, FaSearch } from 'react-icons/fa';

const ETA = () => {
  const [routeNumber, setRouteNumber] = useState('');
  const [busStop, setBusStop] = useState('');
  const [searchBy, setSearchBy] = useState('route'); // 'route', 'stop', or 'stopOnRoute'
  const [etaDetails, setEtaDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEtaDetails = async () => {
    setLoading(true);
    
    // Mock data for demonstration
    const mockData = {
      route: {
        '123': [
          { name: 'Stop 1', arrival: '10:00 AM', departure: '10:05 AM' },
          { name: 'Stop 2', arrival: '10:15 AM', departure: '10:20 AM' },
          { name: 'Stop 3', arrival: '10:30 AM', departure: '10:35 AM' },
        ],
      },
      stop: {
        'Stop 1': { arrival: '10:00 AM', departure: '10:05 AM' },
        'Stop 2': { arrival: '10:15 AM', departure: '10:20 AM' },
        'Stop 3': { arrival: '10:30 AM', departure: '10:35 AM' },
      },
      stopOnRoute: {
        '123': {
          'Stop 1': { arrival: '10:00 AM', departure: '10:05 AM' },
          'Stop 2': { arrival: '10:15 AM', departure: '10:20 AM' },
        },
      },
    };

    if (searchBy === 'route') {
      setEtaDetails(mockData.route[routeNumber] || []);
    } else if (searchBy === 'stop') {
      setEtaDetails([{ name: busStop, ...mockData.stop[busStop] }]);
    } else if (searchBy === 'stopOnRoute') {
      setEtaDetails(Object.entries(mockData.stopOnRoute[routeNumber] || {}).map(([name, times]) => ({ name, ...times })));
    }

    setLoading(false);
  };

  const handleSearch = () => {
    fetchEtaDetails();
  };

  return (
    <div id="eta" className="p-6 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
  Estimated Time of Arrival (ETA)
</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium text-black-700  mb-2">
          <FaSearch className="inline mr-2" />Search By</label>
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="mt-1 block w-full border-red-300 rounded-md shadow-sm p-2 bg-white text-gray-900"
        >
          <option value="route">Route Number</option>
          <option value="stop">Bus Stop</option>
          <option value="stopOnRoute">Bus Stop on Route</option>
        </select>
      </div>

      {searchBy === 'route' && (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-100 mb-2">
          <FaBus className="inline mr-2" />
           Route Number
            </label>
          <input
            type="text"
            value={routeNumber}
            onChange={(e) => setRouteNumber(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900"
            placeholder="Enter route number"
          />
        </div>
      )}

      {searchBy === 'stop' && (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-900 mb-2">
          <FaBus className="inline mr-2" />
            Bus Stop
            </label>
          <input
            type="text"
            value={busStop}
            onChange={(e) => setBusStop(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900"
            placeholder="Enter bus stop name"
          />
        </div>
      )}

      {searchBy === 'stopOnRoute' && (
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
          <FaBus className="inline mr-2" />
            Route Number
            </label>
          <input
            type="text"
            value={routeNumber}
            onChange={(e) => setRouteNumber(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-white text-gray-900"
            placeholder="Enter route number"
          />
        </div>
      )}

      <button
        onClick={handleSearch}
        className="bg-yellow-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition duration-150 block mx-auto"
      >
        <FaSearch className="inline mr-2" />
        Search
      </button>

      {loading && <p className="mt-4 text-gray-100 text-center">Loading...</p>}

      {etaDetails && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black-400 mb-4">ETA Details</h3>
          {Array.isArray(etaDetails) && etaDetails.length > 0 ? (
            <ul className="list-style-type-none ml-6 text-gray-100">
              {etaDetails.map((stop, index) => (
                <li key={index} className="mb-4 p-4 bg-gray-800 rounded-md shadow-md">
                  <div className="text-lg font-bold text-yellow-400">
                  <FaBus className="inline mr-2" />
                    {stop.name}</div>
                  <div className="text-gray-300">Arrival: <span className="text-white">{stop.arrival}</span></div>
                  <div className="text-gray-300">Departure: <span className="text-white">{stop.departure}</span></div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-center">No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ETA;
