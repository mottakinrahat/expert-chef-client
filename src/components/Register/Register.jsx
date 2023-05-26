import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'sweetalert2/src/sweetalert2.scss'

const Register = () => {
  const [error, setError] = useState('');
  const { user, createUser, updateUserData, logOut } = useContext(AuthContext);
  const Swal = require('sweetalert2')
  


  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (password.length < 6) {
      setError('Please enter a password with at least 6 characters');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(name, photoUrl);
       
      toast("Wow so easy!");
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message
        });
      });
  };

  return (
    <div>
         <ToastContainer></ToastContainer>
         
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Please Register
          </h1>
          <form onSubmit={handleRegister} className="mt-6">
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="photoURL" className="block text-sm font-semibold text-gray-800">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
              {error && <p className="mt-5 text-red-700">{error}</p>}
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
         
            </div>
          </form>
     
          <p className="mt-8 text-xl font-light text-center">
            Already have an account? <Link to="/login" className="text-blue-700">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
