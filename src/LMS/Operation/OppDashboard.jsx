// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const OppDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-black shadow-md">
//         <nav className="flex justify-around py-4">
//           <Link to="/Opp/Profile" className="text-blue-600 hover:text-blue-800">Profile</Link>
//           <Link to="/Opp/AppliedCandidate" className="text-blue-600 hover:text-blue-800">Applied Candidates</Link>
//           <Link to="/Opp/Rejected" className="text-blue-600 hover:text-blue-800">Rejected Candidates</Link>
//           <Link to="/Opp/Accepted" className="text-blue-600 hover:text-blue-800">Accepted Candidates</Link>
//         </nav>
//       </header>
//       <main className="p-4">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default OppDashboard;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OppAppliedCandidate from './OppAppliedCandidate';
import OppRejected from './OppRejected';
import OppAccepted from './OppAccepted';
import OppProfile from './OppProfile';
import { RiLogoutCircleRLine } from "react-icons/ri";

const OppDashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile'); // Default tab 'Profile'

  const renderComponent = () => {
    switch (activeTab) {
      case 'AppliedCandidate':
        return <OppAppliedCandidate/>;
      case 'Rejected':
        return <OppRejected />;
      case 'Accepted':
        return <OppAccepted/>;
      case 'Logout':
        return ;
      default: 
        return <OppProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black shadow-md fixed w-full top-85 z-10">
        <nav className="flex justify-around py-4">
          <button onClick={() => setActiveTab('Profile')} className="text-blue-600 hover:text-blue-800">Profile</button>
          <button onClick={() => setActiveTab('AppliedCandidate')} className="text-blue-600 hover:text-blue-800">Applied Candidates</button>
          <button onClick={() => setActiveTab('Rejected')} className="text-blue-600 hover:text-blue-800">Rejected Candidates</button>
          <button onClick={() => setActiveTab('Accepted')} className="text-blue-600 hover:text-blue-800">Accepted Candidates</button>
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

export default OppDashboard;
