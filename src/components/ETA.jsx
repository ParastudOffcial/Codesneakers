import React, { useEffect, useState } from 'react';

const ETA = ({ routeNumber }) => {
  const [busStopDetails, setBusStopDetails] = useState(null);

  useEffect(() => {
    // Fetch details based on route number
    const fetchBusStopDetails = async () => {
      // Mock data for demonstration
      const mockDetails = {
        '123': [
          { name: 'Stop 1', arrival: '10:00 AM', departure: '10:05 AM' },
          { name: 'Stop 2', arrival: '10:15 AM', departure: '10:20 AM' },
          { name: 'Stop 3', arrival: '10:30 AM', departure: '10:35 AM' },
        ],
      };

      setBusStopDetails(mockDetails[routeNumber] || []);
    };

    fetchBusStopDetails();
  }, [routeNumber]);

  return (
    <div id="eta" className="p-4">
      <h2 className="text-xl font-bold mb-4">Estimated Time of Arrival (ETA)</h2>
      {busStopDetails ? (
        <div>
          <h3 className="text-lg font-semibold mb-2">Details for Route {routeNumber}</h3>
          <ul className="list-disc ml-6">
            {busStopDetails.map((stop, index) => (
              <li key={index} className="mb-2">
                <div>{stop.name}</div>
                <div>Arrival: {stop.arrival}</div>
                <div>Departure: {stop.departure}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ETA;
