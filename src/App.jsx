import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './page/landing';
import LogIn from './page/login';
import Signup from './page/Signup';
import ForgetPassword from './Components/LMS/Password/ForgotPassword';
import AdminLogin from './Components/LMS/Admin/AdminLogin';
import AdminDashboard from './Components/LMS/Admin/AdminDashboard';
import DisplayLectures from './Components/LMS/Admin/DisplayLecture';
import AddCourseLecture from './Components/LMS/Admin/AddCourseLecture';
import CreateCourse from './Components/LMS/Course/CreateCourse';
import EditCourse from './Components/LMS/Course/EditCourse';
import AboutUs from './page/AboutUs';
import Footer from './Components/Footer';
import ContactUs from './page/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgetPassword/>} />
          
          
          {/* admin routes  */}
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/DisplayLectures" element={<DisplayLectures/>} />
          <Route path="/AddCourseLecture" element={<AddCourseLecture/>} />



        {/* Course Routes */}
        <Route path="/CreateCourse" element={<CreateCourse/>} />
        <Route path="/EditCourse" element={<EditCourse/>} />

      
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

