import React from 'react';
import '../style/ProfileCards.css'
const ProfileCard = ({   name, title, imgSrc, socialLinks }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="profile-card w-60">
        <div className="profile-img">
          <img src={imgSrc} alt="Team Image" />
        </div>
        <div className="profile-content">
          <h2 className="title">
            {name}
            <span>{title}</span>
          </h2>
          <ul className="social-link">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={`fa ${link.icon}`}></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProfileCards = () => {
  const socialLinks = [
    { url: "#", icon: "fa-facebook" },
    { url: "#", icon: "fa-google" },
    { url: "#", icon: "fa-twitter" },
    { url: "#", icon: "fa-youtube" },
  ];
  return (
    <div className="container mb-5">
      <h1 className='text-center font-bold text-4xl mb-5'>Our Team</h1>
    <div className="row flex flex-wrap items-center justify-center gap-5">
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
      <ProfileCard
        name="Henry Polles"
        title="Designer, Developer"
        imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
        socialLinks={socialLinks}
      />
        <ProfileCard
          name="Henry Polles"
          title="Designer, Developer"
          imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
          socialLinks={socialLinks}
        />
        <ProfileCard
          name="Henry Polles"
          title="Designer, Developer"
          imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
          socialLinks={socialLinks}
        />
        <ProfileCard
          name="Henry Polles"
          title="Designer, Developer"
          imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
          socialLinks={socialLinks}
        />
        <ProfileCard
          name="Henry Polles"
          title="Designer, Developer"
          imgSrc="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg"
          socialLinks={socialLinks}
        />
    </div>
  </div>
  );
};

export default ProfileCards;
