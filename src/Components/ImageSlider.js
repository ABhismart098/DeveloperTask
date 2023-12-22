
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './ParallaxImageSlider.css';

// const ParallaxImageSlider = ({ image, sideImage, transitionSpeed }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: transitionSpeed || 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {/* First Slide */}
//       <div className="slider-item">
//         <img src={image} alt="Parallax Slide" />
//         <div className="slide-content">
//           <h1>Welcome to Our Website</h1>
//           <p>
//             Explore the amazing world of parallax effects. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <button>Learn More</button>
//         </div>
//       </div>

//       {/* Second Slide (Side Parallax) */}
//       <div className="side-parallax">
//         {/* ... (content for the second slide) */}
//       </div>
//     </Slider>
//   );
// };

// export default ParallaxImageSlider;
// Import necessary dependencies and styles
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ParallaxImageSlider.css';

// Import background image for the second slide
import sideImage from '../IMG/nature.jpg';

const ParallaxImageSlider = ({ image, transitionSpeed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: transitionSpeed || 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {/* First Slide */}
      <div className="slider-item">
        <img src={image} alt="Parallax Slide" />
        <div className="slide-content">
          <h1>Welcome to Our Website</h1>
          <p>
            Explore the amazing world of parallax effects. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Second Slide (Side Parallax) */}
      <div className="slider-item side-parallax">
        {/* Background image for the second slide */}
        <div className="side-parallax-background" style={{ backgroundImage: `url(${sideImage})` }} />

        {/* Content for the second slide */}
        <div className="slide-content">
          <h1>Discover the Side Parallax</h1>
          <p>
            Experience the mesmerizing side parallax effect. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </Slider>
  );
};

export default ParallaxImageSlider;
