import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";
import UserProfile from './UserProfile';
import UserEnrolledCourse from './UserEnrolledCourse';
import UserCourse from './UserCourse';

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('Profile'); // Default tab 'Profile'

    const renderComponent = () => {
      switch (activeTab) {
        case 'Profile':
          return <UserProfile/>;
        case 'UserCourse':
          return <UserCourse />;
        case 'UserEnrolledCourse':
          return <UserEnrolledCourse/>;
        case 'Logout':
          return ;
        default: 
          return <UserProfile/>;
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-black shadow-md fixed w-full top-85 z-10">
          <nav className="flex justify-around py-4">
            <button onClick={() => setActiveTab('Profile')} className="text-blue-600 hover:text-blue-800">Profile</button>
            <button onClick={() => setActiveTab('UserCourse')} className="text-blue-600 hover:text-blue-800">Course</button>
            <button onClick={() => setActiveTab('UserEnrolledCourse')} className="text-blue-600 hover:text-blue-800">Enrolled Course</button>
           
            <button
        onClick={() => setActiveTab('Logout')}
        className="flex items-center text-red-600 hover:text-red-800"
      >
        <RiLogoutCircleRLine className="mr-2" /> Logout
      </button>        </nav>
        </header>
        <main className="pt-16 p-4">
          {renderComponent()}
        </main>
      </div>
    );
  };

export default UserDashboard
