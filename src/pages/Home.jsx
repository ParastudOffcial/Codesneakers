// src/pages/HomePage.jsx
import React from 'react';
import RouteDetails from '../components/BusSchedule';
import TripPlanner from '../components/TripPlanner';

const HomePage = () => {
  return (
    <div className="h-auto bg-gray-900 text-white overflow-hidden">
      <div className="relative flex items-center justify-center gap-8 p-28 bg-gray-800 rounded-lg shadow-lg m-10">
        <div className="w-full lg:w-4/6 animate-fadeInLeft">
          <h1 className="font-bold text-4xl lg:text-6xl mb-4 animate-fadeIn">Your satisfaction is our commitment to excellence in bus services.</h1>
          <p className="text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias iure maxime in excepturi repellendus, libero fuga eligendi quis placeat!
          </p>
        </div>
        <div className="animate-slideIn">
          <img
            src="https://media.istockphoto.com/id/135327019/fr/photo/passager-bus-blanc.jpg?s=612x612&w=0&k=20&c=QhGhp3XT74KwRnJXKHVrFUaAiuf8Pqcor3lo4BV7hlc="
            alt="Bus"
            className="w-full max-w-md h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-6 space-y-6">
        <RouteDetails />
        <TripPlanner />
      </div>
    </div>
  );
};

export default HomePage;
