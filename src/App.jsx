import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './page/landing';

import Signup from './page/Signup';
import ForgetPassword from './LMS/Password/ForgetPassword';
import AdminLogin from './LMS/Admin/AdminLogin';
import AdminDashboard from './LMS/Admin/AdminDashboard';
import DisplayLectures from './LMS/Admin/DisplayLecture';
import AddCourseLecture from './LMS/Admin/AddCourseLecture';
import CreateCourse from './LMS/Course/CreateCourse';
import EditCourse from './LMS/Course/EditCourse';
import OppLogin from './LMS/Operation/OppLogin';
import OppDashboard from './LMS/Operation/OppDashboard';
import OppProfile from './LMS/Operation/OppProfile';
import OppAppliedCandidate from './LMS/Operation/OppAppliedCandidate';
import OppRejected from './LMS/Operation/OppRejected';
import OppAccepted from './LMS/Operation/OppAccepted';
import UserDashboard from './LMS/User/UserDashboard';
import UserProfile from './LMS/User/UserProfile';
import UserCourse from './LMS/User/UserCourse';
import UserEnrolledCourse from './LMS/User/UserEnrolledCourse';
import ContactUs from './page/ContactUs';
import AboutUs from './page/AboutUs';






const App = () => {
  return (
    <Router> 
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<logIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
    



          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          
          
          {/* admin routes  */}
          <Route path="/AdminLogin" element={<AdminLogin/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/DisplayLectures" element={<DisplayLectures/>} />
          <Route path="/AddCourseLecture" element={<AddCourseLecture/>} />



        {/* Course Routes */}
        <Route path="/CreateCourse" element={<CreateCourse/>} />
        <Route path="/EditCourse" element={<EditCourse/>} />
   
        {/* Operation */}
        <Route path="/OppLogin" element={<OppLogin/>} />
        <Route path="/OppDashboard" element={<OppDashboard/>} />
        <Route path="/OppProfile" element={<OppProfile/>} />
        <Route path="/OppAppliedCandidate" element={<OppAppliedCandidate/>} />
        <Route path="/OppRejected" element={<OppRejected/>} />
        <Route path="/OppAccepted" element={<OppAccepted/>} />
      

        {/* User Dashboard */}
        <Route path="/UserDashboard" element={<UserDashboard/>} /> 
        <Route path="/UserProfile" element={<UserProfile/>} /> 
        <Route path="/UserCourse" element={<UserCourse/>} /> 
        <Route path="/UserEnrolledCourse" element={<UserEnrolledCourse/>} /> 




        </Routes>
      </div>
    </Router>
  );
};

export default App;

