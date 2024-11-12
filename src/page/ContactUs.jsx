import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";


const ContactUs = () => {
  return (
    <div className='w-full bg-[#E9EBFC]'>
      <div className="grid w-full items-center grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col items-center justify-between">
          <div className="space-y-2">
            {/* <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <p className="dark:text-gray-600"></p> */}
          </div>
          <img src="https://i.pinimg.com/originals/3f/3d/3a/3f3d3ae5efc0673fc33ef8dd145c049a.gif" alt="Doodle" className="p-6 " />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            {/* <label htmlFor="name" className="text-sm">Full name</label> */}
            <input 
              id="name" 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-3 rounded bg-transparent placeholder:text-black border-b-black border-b-2 focus:outline-none" 
            />
          </div>
          <div>
            {/* <label htmlFor="email" className="text-sm">Email</label> */}
            <input 
              id="email" 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded bg-transparent placeholder:text-black border-b-black border-b-2 focus:outline-none " 
           
            />
          </div>
          <div>
            {/* <label htmlFor="message" className="text-sm">Your message</label> */}
            <textarea 
              id="message" 
              placeholder="Message" 
              className="w-full p-3 resize-none rounded bg-transparent placeholder:text-black border-b-black border-b-2 focus:outline-none" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send message
          </button>
        </form>
      </div>
      <div className='w-full p-3'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.653219490511!2d77.65306787442618!3d12.865660417193464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d696e67880f%3A0x5b9a53aa71b83daa!2sKrutanic%20Solutions!5e0!3m2!1sen!2sin!4v1731054188137!5m2!1sen!2sin" className='w-full' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='flex py-16 justify-center gap-5 w-full h-[30vh]'>
        <div className='flex '>
        <IoLocationSharp />
        <address>Branch office : 2nd Floor, No 33, Chikkathogur Main Road, Pragati Nagar, Basapur, Bengaluru - 56010</address>
        </div>
         <div className='flex '>
         <MdCall />
         <a href="tel:+91 70228 12878">+91 70228 12878</a>
         </div>
         <div className='flex '>
         <IoMdMailOpen />
         <a href="mailto:info.krutanic@gmail.com">info.krutanic@gmail.com</a>
         </div>
        
      </div>

    </div>
  );
};

<<<<<<< HEAD
export default ContactUs;
=======
export default ContactUs;
>>>>>>> a6801828ee9f35e6aebe944720e0e3fc0879e807
