import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../utils/validation';
import { supabase } from '../api/supabaseClient';

const Register = () => {
  const navigate = useNavigate();


  const[formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: null,
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if(!result.success){
      const formattedErrors = result.error.format();
      setErrors(formattedErrors); 
    }else {
      setErrors({});
      console.log("Form is valid!", result.data);

      await handleRegister(result.data);
    }

  }

  const handleRegister = async(data)=>{
    try {
      const { error } = await supabase.auth.signUp({
    email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          phone: data.phoneNumber,
          company: data.companyName,
          is_agency: data.isAgency
        }
      }
  });
    if (error) throw error;
    alert("Registration successful!");
    navigate("/account");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message);
    }
  }

  // const handleRegister = async(data)=>{
  //   try {
  //     const { error } = await supabase.auth.signUp({
  //       email: data.email,
  //       password: data.password,
  //       options: {
  //         data: { full_name: data.fullName, phone: data.phoneNumber }
  //       }
  //     });
  //     if (error) throw error;
      
  //     alert("Registration successful!");
  //     navigate("/account"); // 3. Use this instead of <Navigate />
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white min-h-screen flex flex-col p-8 w-full max-w-sm">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Create your PopX account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="fullName">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName._errors[0]}</p>}
            </div>
            <div className="mb-6 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="phoneNumber">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Marry Doe"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber._errors[0]}</p>}
            </div>
            <div className="mb-6 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="email">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Marry Doe"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email._errors[0]}</p>}
            </div>
            <div className="mb-3 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Marry Doe"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password._errors[0]}</p>}
            </div>
            <div className="mb-5 relative">
              <label className="block text-purple-600 text-sm font-semibold mb-1 absolute -top-3 left-3 bg-white px-2" htmlFor="companyName">
                Company name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Marry Doe"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && <p className="text-red-500 text-xs italic">{errors.companyName._errors[0]}</p>}
            </div>
            <div className="mb-6 relative">
              <p className="text-gray-700 text-sm font-semibold mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="yes"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                  className="mr-2"
                />
                <label htmlFor="yes" className="mr-4">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                  className="mr-2"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer hover:bg-purple-700" type="submit">
                  Create Account
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
