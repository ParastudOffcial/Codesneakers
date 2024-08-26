// src/pages/Services.jsx
import React from 'react';
import BusSchedule from '../components/RouteDetails';
import RouteDetails from '../components/BusSchedule';
import TrackBus from '../components/TrackBus';
import ETA from '../components/ETA';
import SearchBusStop from '../components/SearchBusStop';
import TripPlanner from '../components/TripPlanner';

const Services = () => {
  return (
    <div className="p-6 space-y-6">
      <BusSchedule />
      <RouteDetails />
      <TrackBus />
      <ETA />
      <SearchBusStop />
      <TripPlanner />
    </div>
  );
};

export default Services;
