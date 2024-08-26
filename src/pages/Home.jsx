import React from 'react';
import { FaBus, FaCalendarAlt, FaCheckCircle, FaThumbsUp, FaMap, FaCalendarDay } from 'react-icons/fa';
import RouteDetails from '../components/RouteDetails'; // Ensure this import is correct
import TripPlanner from '../components/TripPlanner'; // Ensure this import is correct

const HomePage = () => {
  return (
    <div className="h-auto bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center gap-8 p-28 bg-gray-800 rounded-lg shadow-lg m-10">
        <div className="w-full lg:w-4/6 animate-fadeInLeft">
          <h1 className="font-bold text-4xl lg:text-6xl mb-4 animate-fadeIn">Your Satisfaction is Our Commitment to Excellence in Bus Services</h1>
          <p className="text-lg lg:text-xl">
            Experience top-notch bus services designed for your convenience and reliability. Join us for a seamless travel experience with our advanced tools and support.
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

      {/* Feature Highlights */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg m-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-4">
            <FaBus className="text-green-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Reliable Transport</h3>
              <p className="text-lg">Our buses are always on time, ensuring you reach your destination without delay.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaCalendarAlt className="text-blue-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              <p className="text-lg">Choose from a variety of schedules that fit your needs, whether it's for daily commutes or special trips.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaCheckCircle className="text-yellow-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Easy Booking</h3>
              <p className="text-lg">Book your rides quickly and easily through our user-friendly platform.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaThumbsUp className="text-red-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
              <p className="text-lg">We prioritize your satisfaction with excellent service and support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 m-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Ready to Experience Top-Quality Bus Services?</h2>
        <p className="text-lg mb-4 text-center">
          Discover the convenience and reliability of our bus services today. Explore our routes, book your trip, and enjoy a smooth journey.
        </p>
        <div className="flex justify-center">
          <a href="/services" className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-150">
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-6 space-y-12">
        {/* RouteDetails Component */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 relative">
          <div className="absolute top-0 right-0 p-4">
            <FaMap className="text-green-500 text-6xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Discover Our Bus Routes</h2>
          <p className="text-lg mb-4">
            Explore our extensive network of bus routes designed to make your travel easy and efficient. Our RouteDetails component provides comprehensive information on all available routes, helping you plan your journey with ease.
          </p>
          <RouteDetails />
        </div>

        {/* TripPlanner Component */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 relative">
          <div className="absolute top-0 right-0 p-4">
            <FaCalendarDay className="text-blue-500 text-6xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Plan Your Trip with Ease</h2>
          <p className="text-lg mb-4">
            Use our TripPlanner component to customize your travel plans. Whether you're planning a daily commute or a special journey, our tool provides you with the best routes and schedules tailored to your needs.
          </p>
          <TripPlanner />
        </div>

        {/* Navigation Directions */}
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Navigate Our Website Easily</h2>
          <p className="text-lg mb-4 text-center">
            Ready to explore more? Use the following links to navigate our website and access the features that best suit your needs:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="/services" className="text-green-500 hover:underline">Explore Our Services</a></li>
            <li><a href="/contact" className="text-blue-500 hover:underline">parth</a></li>
            <li><a href="/about" className="text-yellow-500 hover:underline">Learn About Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
