import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white h-screen flex flex-col justify-end items-center p-8 w-full max-w-sm">
        <div className="text-left w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <Link to="/register">
            <button className="w-full bg-purple-600 text-white py-3 rounded-md mb-4 font-semibold">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="w-full bg-purple-200 text-purple-600 py-3 rounded-md font-semibold">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
