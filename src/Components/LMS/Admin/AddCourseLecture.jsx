import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AddCourseLecture() {
    const navigate = useNavigate();

    // Static values for the lecture details
    const staticCourseDetails = {
        title: "Static Lecture Title",
        description: "This is a static description of the lecture.",
        videoSrc: "path/to/static/video.mp4" // Replace with a valid video path
    }

    

    return (
     
            <div className="min-h-[90vh] text-black flex flex-col items-center justify-center gap-10 mx-5 sm:mx-16 md:mx-20">
                <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-[80vw] md:w-96 rounded-lg">
                    <header className="flex items-center justify-center relative">
                        <button 
                            className="absolute left-2 text-2xl text-green-500"
                            onClick={() => navigate(-1)}
                        >
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className="text-xl text-yellow-500 font-semibold">
                            Add new lecture
                        </h1>
                    </header>
                    <form className="flex flex-col gap-3">
                        <input 
                            type="text"
                            name="title"
                            placeholder="enter the title of the lecture"
                            className="bg-transparent px-3 py-1 border"
                            value={staticCourseDetails.title}
                            readOnly
                        />
                        <textarea 
                            name="description"
                            placeholder="enter the description of the lecture"
                            className="bg-transparent px-3 py-1 border resize-none overflow-y-scroll h-36"
                            value={staticCourseDetails.description}
                            readOnly
                        />
                        <video 
                            muted
                            src={staticCourseDetails.videoSrc}
                            controls 
                            controlsList="nodownload nofullscreen"
                            disablePictureInPicture
                            className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                        />
                        <button 
                            type="button" 
                            className="btn btn-primary py-1 font-semibold text-lg"
                            onClick={() => alert("Lecture added!")} // Example static action
                        >
                            Add new Lecture
                        </button>
                    </form>
                </div>
            </div>
       
    );
}

export default AddCourseLecture;
