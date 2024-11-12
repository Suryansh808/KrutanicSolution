import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const courses = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    image: 'https://imgs.search.brave.com/4TSEd7y6e6brzx6N2zBanOGm8t2KcBXrXzyxCRBejeE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDI3LzEy/Ny80NjMvbm9uXzJ4/L2phdmFzY3JpcHQt/bG9nby1qYXZhc2Ny/aXB0LWljb24tdHJh/bnNwYXJlbnQtZnJl/ZS1wbmcucG5n',
    description: 'Learn the basics of JavaScript, the essential language for web development.',
    progress: 50,
    lessons: [
      { id: 1, title: 'Lesson 1: Getting Started', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 2, title: 'Lesson 2: Variables and Data Types', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ],
    certificateAvailable: true,
  },
  {
    id: 2,
    title: 'React for Beginners',  
    image: 'https://imgs.search.brave.com/X1JTdfD_78j-z6Fyw9dKT6yIbSMCLuBEQD_mDIVz2oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9yZWFjdC1sb2dv/LTEucG5n',
    description: 'A complete guide to building interactive UIs with React.',
    progress: 70,
    lessons: [
      { id: 1, title: 'Lesson 1: Introduction to React', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 2, title: 'Lesson 2: JSX and Components', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 3, title: 'Lesson 3: State and Props', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ],
    certificateAvailable: true,
  },
  {
    id: 3,
    title: 'CSS Fundamentals',
    image: 'https://imgs.search.brave.com/Z6IBe2hdjdD4NhglY9Mlg9d9orI71D_S-2DB3FVASGg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jc3MtbG9nby5w/bmc',
    description: 'Master the basics of CSS and learn how to style modern websites.',
    progress: 30,
    lessons: [
      { id: 1, title: 'Lesson 1: CSS Basics', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 2, title: 'Lesson 2: Layout with Flexbox', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ],
    certificateAvailable: false,
  },
  {
    id: 4,
    title: 'Advanced Python Programming',
    image: 'https://imgs.search.brave.com/TZSo_uOjGCgGGKoHfVlgaAo22amOoM89rsoSrIC3bQ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9weXRob24tbG9n/by5wbmc',
    description: 'Explore advanced concepts in Python, including OOP, libraries, and frameworks.',
    progress: 90,
    lessons: [
      { id: 1, title: 'Lesson 1: Object-Oriented Programming', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 2, title: 'Lesson 2: Working with Libraries', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 3, title: 'Lesson 3: Data Science with Pa ndas', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ],
    certificateAvailable: true,
  },
  {
    id: 5,
    title: 'Intro to Machine Learning',
    image: 'https://imgs.search.brave.com/Cw9bVK8ikT3YXrFObSmTkGKpCLAW_75Z-D3GWmP0wqY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vOTU5NGM5/ZTgyMTIzNDE2YzFh/NDk3NzkzNTIyMzBm/OWFlMTBlMGUzOC0z/NDd4MzQ4LnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw',
    description: 'Understand the fundamentals of machine learning and build your first models.',
    progress: 45,
    lessons: [
      { id: 1, title: 'Lesson 1: What is Machine Learning?', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 2, title: 'Lesson 2: Supervised vs Unsupervised Learning', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: 3, title: 'Lesson 3: Basic Algorithms', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ],
    certificateAvailable: false,
  },
];

const UserEnrolledCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setCurrentLesson(course.lessons[0]);
  };

  const handleNextLesson = () => {
    const currentIndex = selectedCourse.lessons.findIndex((lesson) => lesson.id === currentLesson.id);
    const nextLesson = selectedCourse.lessons[currentIndex + 1];
    if (nextLesson) {
      setCurrentLesson(nextLesson);
    }
  };

  const handleBack = () => {
    setSelectedCourse(null);
    setCurrentLesson(null);
  };

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Courses</h2>
        
        {selectedCourse ? (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <button onClick={handleBack} className="text-blue-500 text-sm mb-4 hover:underline">
              &larr; Back to Courses
            </button>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedCourse.title}</h3>
            <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${selectedCourse.progress}%` }}></div>
            </div>
            <p className="text-sm mb-4 text-gray-600">Progress: {selectedCourse.progress}%</p>

            {currentLesson && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{currentLesson.title}</h4>
                <ReactPlayer url={currentLesson.videoUrl} controls width="100%" height="300px" className="mb-4" />
                <button
                  onClick={handleNextLesson}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Next Lesson
                </button>
              </div>
            )}

            {selectedCourse.certificateAvailable && (
              <div className="mt-6">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Download Certificate
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="mt-4 font-semibold text-lg text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEnrolledCourse;

