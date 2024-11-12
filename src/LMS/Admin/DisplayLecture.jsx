import { useState } from "react";
import { MdAutoDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function DisplayLectures() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [currentVideo, setCurrentVideo] = useState(0);

    // Sample static data for lectures
    const lectures = [
        {
            _id: "1",
            title: "Introduction to React",
            description: "Learn the basics of React.js, including components, state, and props.",
            lecture: {
                secure_url: "path_to_your_video1.mp4" // Replace with a valid video URL
            }
        },
        {
            _id: "2",
            title: "React Hooks",
            description: "An in-depth look at React hooks and how to use them in your applications.",
            lecture: {
                secure_url: "path_to_your_video2.mp4" // Replace with a valid video URL
            }
        },
        // Add more static lectures as needed
    ];

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-black mx-[5%]">
            <div className="text-center text-2xl font-semibold text-yellow-500">
                Course Name: Sample Course
            </div>

            {lectures.length > 0 ? (
                <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
                    {/* left section for playing videos and displaying course details */}
                    <div className="space-y-5 md:w-[28rem] md:h-[35rem] p-2 rounded-lg shadow-[0_0_10px_black]">
                        <video
                            src={lectures[currentVideo].lecture.secure_url}
                            className="object-fill rounded-tl-lg rounded-tr-lg max-h-96"
                            controls
                            disablePictureInPicture
                            muted
                            controlsList="nodownload"
                        />
                        <div>
                            <h1>
                                <span className="text-yellow-500"> Title: </span>
                                {lectures[currentVideo].title}
                            </h1>
                            <p>
                                <span className="text-yellow-500 line-clamp-4">
                                    Description:{" "}
                                </span>
                                {lectures[currentVideo].description}
                            </p>
                        </div>
                    </div>

                    {/* right section for displaying list of lectures */}
                    <div className="md:w-[28rem] md:h-[35rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4 ">
                        <div className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>Lectures list</p>
                            <button 
                                className="btn btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                                onClick={() => navigate('/AddCourseLecture')} // Navigate to AddCourseLectures
                            >
                                Add new lecture
                            </button>
                        </div>
                        <ul className="space-y-4 md:overflow-y-auto ">
                            {lectures.map((lecture, idx) => (
                                <li className="space-y-2 flex justify-between " key={lecture._id}>
                                    <p
                                        className="cursor-pointer text-black"
                                        onClick={() => setCurrentVideo(idx)}
                                    >
                                        <span className="text-md text-black"> Lecture {idx + 1}: </span>
                                        {lecture.title}
                                    </p>
                                    <button className="font-semibold text-2xl">
                                        <MdAutoDelete />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <button className="btn btn-active btn-primary px-4 py-2 rounded-md font-semibold text-lg">
                    Add new lecture
                </button>
            )}
        </div>
    );
}

export default DisplayLectures;
