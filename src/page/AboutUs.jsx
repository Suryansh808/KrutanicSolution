import React, { useState, useEffect } from "react";
import DynamicFounder from "../Components/DynamicFounder";
import ProfileCards from "../Components/ProfileCards";


const AboutUs = () => {
  // State to hold the font size
  const [fontSize, setFontSize] = useState(8); // Initial font size in rem

  // useEffect to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the scroll position

      // Formula to reduce font size based on scroll position
      // For mobile, we'll use a smaller minimum font size (e.g., 3rem)
      const newFontSize = Math.max(10 - scrollPosition / 100, window.innerWidth < 768 ? 3 : 5);

      setFontSize(newFontSize);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only once
  return (
    <div className="-mt-5 mb-20">
  <div className="w-full flex items-center justify-center">
      <h1
        className="font-extrabold text-center"
        style={{
          fontSize: `${fontSize}rem`,
          transition: "font-size 0.2s",
        }}
      >
        About Krutanic
      </h1>
    </div>

<div className="w-full  flex flex-col md:flex-row justify-center p-3">
  <div className="w-full md:w-1/2  flex flex-col items-center justify-center px-2 mb-4 md:mb-0">
    <h1 className="text-2xl mb-4 text-center">A Ladder To Brighter Future</h1>
    <p className="text-center">
      Krutanic is at the forefront of transforming education through
      cutting-edge technology. Our comprehensive platform empowers learners
      with personalized learning experiences, collaborative tools, and
      real-time analytics.
    </p>
  </div>

  <div className="w-full md:w-1/2">
    <img
      className="h-[50vh] w-full object-cover"
      src="https://images.unsplash.com/photo-1514466256797-efd55fa1bf4e?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
  </div>
</div>
      <DynamicFounder />
      <ProfileCards/>
    </div>
  );
};

export default AboutUs;
