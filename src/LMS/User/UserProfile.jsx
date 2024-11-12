import React from 'react';
import { FaEdit, FaCamera } from 'react-icons/fa'; // Icon imports for profile editing

const UserProfile = () => {
  const coursedata = [
    { id: 1, coursename: 'Computer Science' },
    { id: 2, coursename: 'Information Technology' },
    // Add more course data as needed
  ];

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      {/* Profile Card */}
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md text-center mb-8 transform transition-all hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 mb-6 flex items-center justify-center text-5xl text-gray-600 hover:bg-indigo-200 cursor-pointer transition-all duration-300">
            {/* Profile photo placeholder with camera icon */}
            <FaCamera />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Your Name</h2>
          <p className="text-lg text-gray-500 mb-5">your.email@example.com</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all focus:outline-none">
              <FaCamera className="mr-2 inline" /> Update Photo
            </button>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all focus:outline-none">
              <FaEdit className="mr-2 inline" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Course Enrollment Section */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Enrolled Courses</h2>
      <div className="overflow-x-auto w-full max-w-3xl">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-4 px-6 text-left">S. No</th>
              <th className="py-4 px-6 text-left">Course Name</th>
            </tr>
          </thead>
          <tbody>
            {coursedata.map((course, index) => (
              <tr key={course.id} className="text-center bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{course.coursename}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
