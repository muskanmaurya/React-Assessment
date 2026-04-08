import React, { useState } from 'react';
import { supabase } from '../api/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../utils/validation';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validate form inputs
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      return; // Stop execution if validation fails
    } else {
      setErrors({});
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      // Check if the error is because the user doesn't exist
      if (error.message.includes("Invalid login credentials")) {
        alert("User not found or incorrect password. Please register if you are new!");
      } else {
        alert(error.message);
      }
    } else {
      // If success, navigate to account
      navigate("/account");
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white min-h-screen flex flex-col p-8 w-full max-w-sm">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
          <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email._errors[0]}</p>}
            </div>
            <div className="mb-6 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password._errors[0]}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer hover:bg-purple-700" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
