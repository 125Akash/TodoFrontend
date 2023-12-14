// LogoutButton.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function LogoutButton({ BASE_URL }) {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const resp = await axios.post(`${BASE_URL}/api/u/logout`, null, { withCredentials: true });

      if (resp.data.success === true) {
        sessionStorage.removeItem('token');
        window.alert('Logout Successful!');
        navigate('/');
      } else {
        window.alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.log(error);
      window.alert('Error during logout. Please try again.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
