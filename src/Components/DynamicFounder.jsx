import React from 'react'
import img2 from '../assets/img2.png'

const DynamicFounder = () => {
  return (
    <div>
    <div className="section">
      {/* <div className="video-visual">
        <video
          className="video"
          autoplay
          loop
          muted
          poster=""
          role="none"
          aria-label="background gradient animation"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}
      <div className="section-wrapper">
        <div className="content-wrapper">
          <div className="content content-1">
            <div className="mobile-visual">
              <img
                className="card-img"
                src={img2}
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="meta">
              <h2 className="headline">
                Co-Founder : <span className="text-highlight">Founder Name here</span>
              </h2>
              <p className="desc">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, pariatur?
              </p>
            </div>
          </div>
          <div className="content content-2">
            <div className="mobile-visual">
              <img
                className="card-img"
                src={img2}
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="meta">
            <h2 className="headline">
                Co-Founder : <span className="text-highlight">Founder Name here</span>
              </h2>
              <p className="desc">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, pariatur?
              </p>
            </div>
          </div>
          <div className="content content-3">
            <div className="mobile-visual">
              <img
                className="card-img"
                src={img2}
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div className="meta">
            <h2 className="headline">
                Co-Founder : <span className="text-highlight">Founder Name here</span>
              </h2>
              <p className="desc">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, pariatur?
              </p>
            </div>
          </div>     
        </div>
        <div className="visual">
          <div className="card-wrapper">
            <div className="card card-1">
              <img
                className="card-img"
                src={img2}
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="card card-2">
              <img
                className="card-img"
                src={img2}
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="card card-3">
              <img
                className="card-img"
                src={img2}
                alt="Female warrior in armor - Video game character"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

<<<<<<< HEAD
export default DynamicFounder
=======
export default DynamicFounder
>>>>>>> a6801828ee9f35e6aebe944720e0e3fc0879e807
