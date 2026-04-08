import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [isAgency, setIsAgency] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white min-h-screen flex flex-col p-8 w-full max-w-sm">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your PopX account</h1>
          <form>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="fullName">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Marry Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="phoneNumber">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                placeholder="Marry Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="email">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Marry Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Marry Doe"
              />
            </div>
            <div className="mb-6">
              <label className="block text-purple-600 text-sm font-semibold mb-1" htmlFor="companyName">
                Company name<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName"
                type="text"
                placeholder="Marry Doe"
              />
            </div>
            <div className="mb-6">
              <p className="text-gray-700 text-sm font-semibold mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  checked={isAgency === true}
                  onChange={() => setIsAgency(true)}
                  className="mr-2"
                />
                <label htmlFor="yes" className="mr-4">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                  checked={isAgency === false}
                  onChange={() => setIsAgency(false)}
                  className="mr-2"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/account" className="w-full">
                <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
