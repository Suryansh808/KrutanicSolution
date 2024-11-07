import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t fixed bottom-0 left-0 w-full py-5 flex justify-between items-center">
      <p className="ml-4">
        Copyright &copy; <span id="year">{new Date().getFullYear()}</span> <a href="#" className="hover:underline"></a>
      </p>
      <div className="footer-menu mr-4">
        <ul className="flex space-x-4 list-none p-0 m-0">
          <li><Link to='/' className="hover:underline">Home</Link></li>
          <li><Link to='/AboutUs' className="hover:underline">About us</Link></li>
          <li><Link to='/ContactUs' className="hover:underline">Contact us</Link></li>
          <li><Link to='/TalentHunt' className="hover:underline">Talent hunt</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
