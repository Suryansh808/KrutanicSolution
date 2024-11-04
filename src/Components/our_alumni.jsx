import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientsCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className="clients">
      <div className="container">
        <Slider {...settings}>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
            <div className="item box">
              <img alt="client logo" className="client-img" src= "https://res.cloudinary.com/oralyildiz/image/upload/v1629776533/1_befu7u.png" />
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientsCarousel;
