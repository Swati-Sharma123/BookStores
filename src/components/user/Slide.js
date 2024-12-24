import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container" style={{ padding: '20px' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-923232_960_720.jpg"
            alt="Coding Book"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Coding Mastery</h3>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/06/19/15/book-1955797_960_720.jpg"
            alt="Fantasy Book"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Fantasy Tales</h3>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/03/26/09/41/books-690219_960_720.jpg"
            alt="Library View"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Knowledge Repository</h3>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/19/15/13/book-1999846_960_720.jpg"
            alt="Inspirational Book"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Inspiration Unlocked</h3>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/book-1283865_960_720.jpg"
            alt="Adventure Book"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Adventurer's Diary</h3>
        </div>
      </Slider>
    </div>
  );
}
