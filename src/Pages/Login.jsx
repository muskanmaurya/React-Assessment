import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white min-h-screen flex flex-col p-8 w-full max-w-sm">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
          <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <form>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/account" className="w-full">
                <button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
