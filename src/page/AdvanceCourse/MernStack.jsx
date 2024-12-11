import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import MentorSection from "../../Components/MentorSection";
import Alumni from "../../Components/Alumni";
import BenefitsofLearning from "./Components/BenefitsofLearning";
import Skills from "./Components/Skills";
import StoreSection from "./Components/StoreSection";
import Certification from "./Components/Certification";
import MERN from '../../assets/Advanced Course Images/Mern Stack Development/mern.png'
import  curriculumimage from '../../assets/Advanced Course Images/Mern Stack Development/MSD 1.jpg'
import { Link } from "react-router-dom";



const MernStack = () => {
  const [activeCategory, setActiveCategory] = useState("Program");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
 
   // scrolling
   const [isVisible, setIsVisible] = useState(false);
   const [lastScrollPos, setLastScrollPos] = useState(0);
   // scrolling ends
 
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const courseTopics = [
    { title: "MongoDB - Database Management", icon: "🌐" },
    { title: "Express.js - Web Framework", icon: "🎣" },
    { title: "React.js - Frontend Development", icon: "⚡" },
    { title: "Node.js - Backend Development", icon: "🛣️" },
    { title: "API Development and Integration", icon: "🗃️" },
    { title: "Full-Stack Application Deployment", icon: "🗃️" },
  ];

  const modules = [
    {
      title: "MongoDB and Database Management",
      objectives:
        "Learn to set up and manage databases using MongoDB for storing and retrieving application data.",
      topics: [
        "MongoDB Basics",
        "Database Design and Schemas",
        "CRUD Operations",
        "Aggregation Framework",
        "Data Modeling and Indexing",
      ],
    },
    {
      title: "Express.js and Backend Development",
      objectives:
        "Master backend development using Express.js to create robust APIs and server-side logic.",
      topics: [
        "Setting Up Express Server",
        "Middleware Functions",
        "RESTful API Design",
        "Routing and Request Handling",
        "Error Handling and Validation",
      ],
    },
    {
      title: "React.js and Frontend Development",
      objectives:
        "Understand the core concepts of React.js for building dynamic user interfaces.",
      topics: [
        "React Components and JSX",
        "State and Props Management",
        "Event Handling",
        "React Hooks (useState, useEffect)",
        "React Router for Navigation",
      ],
    },
    {
      title: "Node.js and Backend Framework",
      objectives:
        "Learn how to create scalable server-side applications using Node.js and integrate it with databases and APIs.",
      topics: [
        "Node.js Basics and Setup",
        "Handling Requests and Responses",
        "Asynchronous Programming (Promises, Async/Await)",
        "Server-Side Rendering",
        "Building RESTful Services",
      ],
    },
    {
      title: "Full-Stack Application Development and Deployment",
      objectives:
        "Combine all technologies to develop and deploy a complete web application.",
      topics: [
        "Building Full-Stack Applications",
        "Frontend-Backend Integration",
        "Authentication and Authorization (JWT)",
        "Deployment on Heroku and AWS",
        "Testing and Debugging",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos) {
        setIsVisible(true); // Show on scroll down
      } else {
        setIsVisible(false); // Hide on scroll up
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);
 
 

  const jobRoles = [
    {
      title: "Full-Stack Developer",
      description:
        "Develops both the frontend and backend of web applications using the MERN stack.",
    },
    {
      title: "MERN Stack Developer",
      description:
        "Builds dynamic web applications by integrating MongoDB, Express, React, and Node.js.",
    },
    {
      title: "Frontend Developer",
      description:
        "Focuses on creating user interfaces using React.js and other frontend technologies.",
    },
    {
      title: "Backend Developer",
      description:
        "Handles server-side logic and APIs using Node.js and Express.js.",
    },
    {
      title: "API Developer",
      description:
        "Specializes in building and maintaining RESTful APIs to connect the frontend with the backend.",
    },
    {
      title: "Web Application Architect",
      description:
        "Designs scalable, maintainable web applications and oversees both frontend and backend systems.",
    },
  ];

  const Difference = [
    {
      title: "High Demand",
      description:
        "MERN stack developers are in high demand for building complete web applications.",
      icon: "👥",
    },
    {
      title: "Lucrative Salaries",
      description:
        "The specialized skills in MERN stack development lead to competitive salaries.",
      icon: "📘",
    },
    {
      title: "Full-Stack Skills",
      description:
        "MERN stack allows you to work on both front-end (React.js) and back-end (Node.js, MongoDB, Express.js) development.",
      icon: "📦",
    },
    {
      title: "Constant Growth",
      description:
        "The evolving technologies in the MERN stack offer continuous learning and skill enhancement.",
      icon: "💼",
    },
    {
      title: "Versatile Opportunities",
      description:
        "MERN stack developers can work across industries, including startups and large enterprises.",
      icon: "💻",
    },
    {
      title: "Innovative Development",
      description:
        "MERN stack enables building dynamic, scalable, and modern web applications",
      icon: "🔗",
    },
  ];

  const faqData = {
    Program: [
      {
        question: "What topics are covered in the MERN Stack program?",
        answer:
          "The program covers MongoDB, Express.js, React.js, Node.js, API development, and deploying full-stack web applications.",
      },
      {
        question: "How is the course delivered?",
        answer:
          "The course is delivered online with a combination of live sessions, recorded lectures, practical workshops, and hands-on projects.",
      },
      {
        question: "Will I get hands-on experience?",
        answer:
          "Yes, the course includes real-world case studies, projects, and the development of full-stack web applications.",
      },
      {
        question: "How long is the program?",
        answer:
          "The program runs for 6 months, with flexible learning options designed for professionals.",
      },
    ],
    Eligibility: [
      {
        question: "What are the prerequisites for the program?",
        answer:
          "Basic knowledge of JavaScript and web development concepts is recommended but not mandatory.",
      },
      {
        question: "Do I need prior experience in MERN stack development?",
        answer:
          "No, this course is designed for beginners and those looking to advance their web development skills.",
      },
      {
        question: "Can beginners apply?",
        answer:
          "Yes, the program is ideal for anyone willing to learn full-stack web development from the basics.",
      },
      {
        question: "Is there any age restriction?",
        answer:
          "No, the course is open to learners of all ages who meet the eligibility criteria.",
      },
    ],
    Community: [
      {
        question: "How can I interact with other participants?",
        answer:
          "You can engage with peers through discussion forums, group projects, and networking events.",
      },
      {
        question: "Is mentorship available?",
        answer:
          "Yes, personalized mentorship from industry professionals will guide you throughout the course.",
      },
      {
        question: "Can I access support after the course ends?",
        answer:
          "Yes, graduates can access ongoing support through alumni events and community forums.",
      },
      {
        question: "How diverse is the community?",
        answer:
          "Our community is global, bringing together learners and professionals from various industries and backgrounds.",
      },
    ],
    Lectures: [
      {
        question: "Are the lectures pre-recorded or live?",
        answer:
          "The program includes both live sessions and pre-recorded lectures to provide flexibility in learning.",
      },
      {
        question: "How interactive are the sessions?",
        answer:
          "The live sessions are interactive, with Q&A, hands-on exercises, and real-time feedback.",
      },
      {
        question: "Can I replay the lectures if I miss one?",
        answer:
          "Yes, all recorded sessions are available for on-demand viewing.",
      },
      {
        question: "How often are live sessions held?",
        answer:
          "Live sessions are scheduled weekly and are designed to accommodate multiple time zones.",
      },
    ],
    Certification: [
      {
        question: "Will I receive a certificate upon completion?",
        answer:
          "Yes, after completing the program, you will receive an official MERN Stack Development Certification from Krutanic Solutions.",
      },
      {
        question: "Is the certification recognized by employers?",
        answer:
          "Yes, the certification is recognized in the industry and demonstrates your proficiency in full-stack web development.",
      },
      {
        question:
          "Can I add this certification to my resume or LinkedIn profile?",
        answer:
          "Yes, you can showcase your certification on your resume and LinkedIn profile.",
      },
      {
        question: "Is the certification free?",
        answer: "Yes, the certification is included in the program fee.",
      },
    ],
    Opportunities: [
      {
        question: "What career opportunities will this course open for me?",
        answer:
          "The program prepares you for roles like MERN Stack Developer, Full-Stack Developer, Frontend Developer, Backend Developer, and more.",
      },
      {
        question: "Will I receive job placement assistance?",
        answer:
          "Yes, we provide job placement support, including resume reviews, interview preparation, and job search guidance.",
      },
      {
        question: "Are internships available through this program?",
        answer:
          "Yes, internship opportunities are available with partner companies, providing hands-on experience.",
      },
      {
        question: "How will this course help in advancing my career?",
        answer:
          "By mastering full-stack development, you will become a highly competitive candidate for senior web development roles.",
      },
    ],
  };
 
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      <div className="bg-black text-white">
        {/* 1 hero part */}
        <section id="advancemernbg" className="py-[60px] px-[10px] shadow-lg shadow-[#f15b29] min-h-screen flex items-center justify-center">
          <div className="container mx-auto">
            <div className="">
            <h1  data-aos="fade-up" className="text-4xl text-center font-bold mb-3">
            <span class="before:block m-2 p-1 before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#f15b29] relative inline-block">
    <i class="relative text-white "> Take Your Career to the Next Level with{" "}</i>
   
  </span>
  
                  <span class="before:block m-2 p-1 before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#000] relative inline-block">
    <i class="relative text-white ">MERN Stack Developement</i>
   
  </span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div data-aos="fade-up"  className="flex flex-col backdrop-blur-md bg-[#ffffff59] text-black items-center p-6 border border-gray-700 rounded-md">
                  <div className="bg-[#f15b29] p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                    >
                      <path d="M16 10V7a4 4 0 10-8 0v3H5v10h14V10h-3zm-6 0V7a2 2 0 114 0v3H10z" />
                    </svg>
                  </div>

                  <p className="mt-4 font-semibold text-lg">Batch Starting</p>
                  <p>15th Febraury 2025</p>
                  <p className="mt-2 text-md border border-[#f15b29] rounded-lg px-2 py-1"> Available Cohort </p>
                <p className="mt-2 text-md">  16/60 </p>
                </div>

                <div data-aos="fade-up"  className="flex flex-col backdrop-blur-md bg-[#ffffff59] text-black items-center p-6 border  border-gray-700 rounded-md">
                  <div className="bg-[#f15b29] p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                    >
                      <path d="M5 3v18l7-3 7 3V3H5zm12 13l-5-2.18L7 16V5h10v11z" />
                    </svg>
                  </div>
                  <p className="mt-4 font-semibold text-lg">Duration</p>
                  <p>6 Months </p>
                </div>

                <div data-aos="fade-up"  className="flex flex-col backdrop-blur-md bg-[#ffffff59] text-black items-center p-6 border border-gray-700 rounded-md">
                  <div className="bg-[#f15b29] p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                    >
                      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm1-13h-2v5h5v-2h-3z" />
                    </svg>
                  </div>
                  <p className="mt-4 font-semibold text-lg">Program Rating</p>
                  <p><span className="text-[#f15b29]">★★★★</span>☆(4.8/5)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 14 why choose us */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto  text-center">
          <h2
              data-aos="fade-up"
              className="text-[#f15b29] text-3xl font-bold mb-6"
            >
              | Why Choose <span className="text-white">MERN Stack ? </span>
            </h2>
            <p data-aos="fade-up" className="text-gray-400 mb-12">
              Gain expertise in full-stack development by mastering the MERN
              framework and building the applications for modern digital needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Difference.map((Difference, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="bg-[#080810] p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition"
                >
                  <div className="text-[#f15b29] text-4xl mb-4">
                    {Difference.icon}
                  </div>
                  <h3 className="text-lg text-[#f15b29] font-bold  mb-3">
                    {Difference.title}
                  </h3>
                  <p className="text-white  ">{Difference.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 15 why learn with us */}
        <section className="py-[60px] px-[10px]">
       <BenefitsofLearning/>
        </section>
        <hr className=" opacity-10"/>

        {/* 2 Course Overview Section */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl font-bold text-center mb-12 text-[#f15b29]"
            >
             | Program Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {courseTopics.map((topic, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="bg-[#080810] p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-xl font-bold uppercase text-white hover:text-[#f15b29] transition-colors duration-300">
                    {topic.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 3 key outcome section  */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto lg:flex flex-col lg:flex-row">
            <div className=" w-full mb-3 lg:mb-0">
              <h2
                data-aos="fade-up"
                className="text-2xl font-bold mb-4 text-[#f15b29]"
              >
                | Key Takeaways
              </h2>
              <ul data-aos="fade-up" className="space-y-4">
                <li>
                  <span className="font-semibold text-[#f15b29]">
                    Master Full-Stack MERN Development{" "}
                  </span>
                  Learn to build scalable and high-performance web applications
                  using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </li>
                <li>
                  <span className="font-semibold text-[#f15b29]">
                    Develop Expertise in Backend and Frontend Development{" "}
                  </span>

                  {isExpanded && (
                    <span>
                      Gain hands-on experience in creating both the
                      backend (Node.js, Express) and frontend (React) of web
                      applications.
                    </span>
                  )}
                </li>
                <li>
                  <span className="font-semibold text-[#f15b29]">
                    Create and Deploy Web Applications{" "}
                  </span>
                  Learn to deploy full-stack applications on the cloud using
                  tools like Heroku and AWS.
                </li>
                <span className="font-semibold text-[#f15b29]">
                  Understand RESTful API Design{" "}
                </span>
                Master API development with Express.js and Node.js to enable
                communication between your front-end and back-end systems.
                <li>
                  <span className="font-semibold text-[#f15b29]">
                   Handle Server-Side Logic with Node.js.{" "}
                  </span>
                  Implement server-side logic with Node.js to handle requests,
                  interact with databases, and manage application logic.
                  Integrate APIs and Third-Party Services
                </li>
                {/* Hidden additional content */}
                {isExpanded && (
                  <>
                    <li>
                      <span className="font-semibold text-[#f15b29]">
                       Build RESTful APIs for Efficient Communication
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-[#f15b29]">
                       Deploy Full-Stack Applications{" "}
                      </span>
                      Learn how to deploy and host MERN stack applications on
                      platforms like Heroku, AWS, or DigitalOcean
                      for scalability.
                    </li>
                  </>
                )}
              </ul>
              <button
              data-aos="fade-up" 
                onClick={toggleExpand}
                className="mt-4 px-4 py-2 text-white font-medium border  rounded"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Right side: Image */}
            <div data-aos="fade-up" className="lg:w-1/2 w-full h-[300px] rounded-lg shadow-lg shadow-[#082D39] overflow-hidden" >
              <img
                src={MERN}
                alt="Curriculum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 4 Curriculum Section */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto">
          <h2
              data-aos="fade-up"
              className="text-3xl font-bold text-center mb-5 text-[#f15b29]"
            >
              | Curriculum
            </h2>
            <div className="lg:flex lg:gap-8">
            <div className="lg:w-1/2 w-full lg:h-[450px] rounded-lg overflow-hidden mb-5 lg:mb-0 ">
                <img src={curriculumimage} alt="curriculum image" className="w-full h-full "/>
             </div>
              <div className="space-y-4 w-full lg:w-1/2">
                {modules.map((module, index) => (
                  <div key={index} className=" pb-4">
                    <button
                      className="w-full text-left hover:text-[#f15b29] transition-colors duration-300 focus:outline-none"
                      onClick={() =>
                        document
                          .getElementById(`module-${index}`)
                          .classList.toggle("hidden")
                      }
                    >
                      <h3 className="text-xl font-semibold">
                        Module {index + 1}: {module.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {module.objectives}
                      </p>
                    </button>
                    <div id={`module-${index}`} className="hidden mt-4">
                      <ul className="list-disc pl-9 text-gray-300">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="mb-2">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 download curriculum section */}
        <section className="py-[60px] px-[10px]">
          <div
            data-aos="fade-up"
            className="container mx-auto p-5 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 rounded-lg shadow-lg border-2 border-[#f15b29]"
          >
             <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-2 text-[#f15b29]">
                | Get the Full Course Breakdown
              </h2>
              <p className="text-gray-400 text-sm">
                Access the detailed curriculum with key modules and learning
                outcomes of the MERN Stack Development program.
              </p>
            </div>
           <div className="flex flex-col lg:flex-row  items-center justify-center gap-3">
           <button className="bg-[#f15b29] hover:bg-[#f15b29] text-white font-semibold py-2 px-6 rounded flex items-center gap-2 mt-4 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 8a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm9 4a1 1 0 10-2 0V9.707l-.293.293a1 1 0 11-1.414-1.414l2-2a1 1 0 011.414 0l2 2a1 1 0 11-1.414 1.414L12 9.707V12z"
                  clipRule="evenodd"
                />
              </svg>
              <a href='/src/assets/Advanced Course Images/Mern Stack Development/Mern Stack Web Development Advanced Program.pdf' target="blank"> Download</a>
            </button>
            <button
                  
                  className="bg-[#f15b29] hover:bg-[#f15b29] text-white font-semibold py-2 px-6 rounded-md"
                >
                  
                  <Link to='https://prettyform.addxt.com/a/form/vf/1FAIpQLSc0U5iJFWM3f3oMa6g_5uUtuoiSfOf4CIltW77EH7dpRCuwPg' target='_blank'> Connect With Us</Link>
                </button>
           </div>
          </div>
        </section>

        {/* 7 alumni section  */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto">
          <h2
              data-aos="fade-up"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f15b29] text-center mb-12"
            >
              | Our Alumni Excel at Prestigious Brands, Including
            </h2>
            <Alumni/>
          </div>
        </section>

        {/* 10 skills section */}
        <section id="ourAlumni" className="py-[60px] px-[10px]">
        <Skills/>
        </section>
        <hr className=" opacity-10"/>

        {/* 13 job roles section  */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto">
          <h2
              data-aos="fade-up"
              className="text-[#f15b29] text-center text-3xl font-bold mb-8"
            >
              | Career Opportunities in{" "}
              <span className="text-white font-bold">MERN Stack Development</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobRoles.map((role, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#f15b29] bg-[#080810] rounded-md p-4 text-white shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 12 key highlight section */}
        <section className="py-[60px] px-[10px]">
          <div className="container mx-auto">
            <div className="lg:flex gap-5">
              <div className=" w-full mb-8 lg:mb-0">
              <h2
                  data-aos="fade-up"
                  className="text-2xl text-center font-bold mb-6 text-[#f15b29]"
                >
                  | Course Benefits at a Glance
                </h2>
                <p className="text-lg text-center mb-8">
                  Master advanced{" "}
                  <span className="text-[#f15b29] font-bold">
                    MERN Stack 
                  </span>{" "}
                  techniques with hands-on projects, expert-led sessions, and
                  real-world applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className=" p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-[#f15b29]">200+</h3>
                    <p className="mt-2 text-gray-300">Mentees Placed</p>
                  </div>
                  <div className=" p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-[#f15b29]">
                      14+ LPA
                    </h3>
                    <p className="mt-2 text-gray-300">Average CTC</p>
                  </div>
                  <div className=" p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-[#f15b29]">95%</h3>
                    <p className="mt-2 text-gray-300">Placement Rate</p>
                  </div>
                  <div className=" p-6 rounded-lg text-center">
                    <h3 className="text-3xl font-bold text-[#f15b29]">450+</h3>
                    <p className="mt-2 text-gray-300">Hiring Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className=" opacity-10"/>

  

        {/* 8 Certification section */}
        <section className="py-[60px] px-[10px]">
          <div data-aos="fade-up" >

          <Certification/>
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 9 mentors section  */}
        <section className="py-[60px] px-[10px]">
          <div data-aos="fade-up"  className="container mx-auto">
            <MentorSection />
          </div>
        </section>
        <hr className=" opacity-10"/>

        {/* 16 store section */}
        <section className="py-[60px] px-[10px] bg-white">
        <StoreSection/>
        </section>

        {/* 17 new FAQ section */}
        <section className="py-[60px] px-[10px] bg-white">
        <div data-aos="fade-up" className="container mx-auto">
            <h1 className="text-center mb-2 text-4xl font-bold text-black">
              | Ask Us Anything
            </h1>
            <div className="flex justify-center   flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:w-1/6 w-full p-3 border-r border-b md:border-b-0 text-black border-[#f15b29]">
                <ul className="space-y-2">
                  {Object.keys(faqData).map((category) => (
                    <li
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenFAQ(null); // Reset any open question
                      }}
                      className={`cursor-pointer border font-bold text-black py-2 px-4 rounded-lg ${
                        activeCategory === category ? " text-[#f15b29]" : ""
                      }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Content */}
              <div className="md:w-3/4 w-full p-3">
                <h2 className="text-2xl font-bold mb-4 text-[#f15b29]">
                  {activeCategory} :
                </h2>
                <ul className="space-y-4 ">
                  {faqData[activeCategory].map((faq, index) => (
                    <li
                      className="border  overflow-hidden rounded-lg "
                      key={index}
                    >
                      <button
                        onClick={() =>
                          setOpenFAQ(openFAQ === index ? null : index)
                        }
                        className="w-full text-left text-black py-3 px-5  flex justify-between items-center"
                      >
                        {faq.question}
                        <span className="text-[#f15b29] font-bold text-2xl">
                          {openFAQ === index ? "-" : "+"}
                        </span>
                      </button>
                      {openFAQ === index && (
                        <div className="p-4 border-t bg-slate-100 text-black">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 11 scrolling section */}
        <section className="">
          <div
            className={`fixed bottom-0 left-0 w-full bg-white z-10 shadow-md flex justify-between items-center p-4  transition-transform duration-300 ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <p className="text-lg font-semibold text-black">hello</p>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 border rounded-md text-white bg-black  hover:text-[#f15b29]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9-13.5v12m0 0L7.5 10.5m3.5 2.5L16.5 10.5"
                  />
                </svg>
                Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MernStack;