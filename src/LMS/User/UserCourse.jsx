import React, { useState } from "react";

const UserCourse = () => {
  const [appliedCourses, setAppliedCourses] = useState([]);

  const handleApply = (courseName) => {
    const appliedDate = new Date().toLocaleDateString();
    const newCourse = {
      title: courseName,
      date: appliedDate,
      status: "Pending",
    };
    setAppliedCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div className="wrapper">
      <h1 className="title">All course with the price list </h1>

      {/* Table for applied courses */}
      <div className="applied-course-list mb-8">
        <h2 className="text-2xl font-semibold mb-4">APPLIED COURSE LIST</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 font-medium">COURSE TITLE</th>
              <th className="py-3 px-4 font-medium">APPLIED DATE</th>
              <th className="py-3 px-4 font-medium">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {appliedCourses.length > 0 ? (
              appliedCourses.map((course, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">{course.title}</td>
                  <td className="py-3 px-4 border-b">{course.date}</td>
                  <td className="py-3 px-4 border-b text-yellow-600 font-semibold">
                    {course.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-3 px-4 text-center text-gray-500">
                  No courses applied yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cols">
        {[
          { name: "Course1", img: "https://unsplash.it/500/500/" },
          { name: "Course2", img: "https://unsplash.it/511/511/" },
          { name: "Course3", img: "https://unsplash.it/502/502/" },
          { name: "Course4", img: "https://unsplash.it/503/503/" },
          { name: "Course5", img: "https://unsplash.it/504/504/" },
          { name: "Course6", img: "https://unsplash.it/505/505/" },
          { name: "Course7", img: "https://unsplash.it/506/506/" },
          { name: "Course8", img: "https://unsplash.it/508/508/" },
          { name: "Course9", img: "https://unsplash.it/500/500/" },
          { name: "Course10", img: "https://unsplash.it/511/511/" },
          { name: "Course11", img: "https://unsplash.it/502/502/" },
          { name: "Course12", img: "https://unsplash.it/503/503/" },
          { name: "Course13", img: "https://unsplash.it/504/504/" },
          { name: "Course14", img: "https://unsplash.it/505/505/" },
          { name: "Course15", img: "https://unsplash.it/506/506/" },
          { name: "Course16", img: "https://unsplash.it/508/508/" },
        ].map((card, index) => (
          <div
            className="col"
            key={index}
            onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
          >
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                <div className="inner">
                  <p>{card.name}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <button onClick={() => handleApply(card.name)}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCourse;
