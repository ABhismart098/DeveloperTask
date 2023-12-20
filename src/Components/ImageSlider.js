// // // // // // // // components/ParallaxImageSlider.js
// // // // // // // import React from 'react';
// // // // // // // import Slider from 'react-slick';
// // // // // // // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // // // // // // import 'slick-carousel/slick/slick.css';
// // // // // // // import 'slick-carousel/slick/slick-theme.css';
// // // // // // // import './ParallaxImageSlider.css'; // Import the custom styles

// // // // // // // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// // // // // // //   const settings = {
// // // // // // //     dots: true,
// // // // // // //     infinite: true,
// // // // // // //     speed: transitionSpeed || 500,
// // // // // // //     slidesToShow: 1,
// // // // // // //     slidesToScroll: 1,
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <ParallaxProvider>
// // // // // // //       <Slider {...settings}>
// // // // // // //         <div className="slider-item">
// // // // // // //           <Parallax y={[parallaxIntensity * -1, parallaxIntensity]}>
// // // // // // //             <img src={image} alt="Parallax Image" />
// // // // // // //           </Parallax>
// // // // // // //         </div>
// // // // // // //       </Slider>
// // // // // // //     </ParallaxProvider>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ParallaxImageSlider;
// // // // // // // components/ParallaxImageSlider.js
// // // // // // import React from 'react';
// // // // // // import Slider from 'react-slick';
// // // // // // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // // // // // import 'slick-carousel/slick/slick.css';
// // // // // // import 'slick-carousel/slick/slick-theme.css';
// // // // // // import './ParallaxImageSlider.css';

// // // // // // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// // // // // //   const settings = {
// // // // // //     dots: true,
// // // // // //     infinite: true,
// // // // // //     speed: transitionSpeed || 500,
// // // // // //     slidesToShow: 1,
// // // // // //     slidesToScroll: 1,
// // // // // //   };

// // // // // //   return (
// // // // // //     <ParallaxProvider>
// // // // // //       <Slider {...settings}>
// // // // // //         <div className="slider-item">
// // // // // //           <Parallax y={[parallaxIntensity * -1, parallaxIntensity]}>
// // // // // //             {/* Update the alt attribute */}
// // // // // //             <img src={image} alt="Parallax Slide" />
// // // // // //           </Parallax>
// // // // // //         </div>
// // // // // //       </Slider>
// // // // // //     </ParallaxProvider>
// // // // // //   );
// // // // // // };

// // // // // // export default ParallaxImageSlider;
// // // // // // components/ParallaxImageSlider.js
// // // // // import React from 'react';
// // // // // import Slider from 'react-slick';
// // // // // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // // // // import 'slick-carousel/slick/slick.css';
// // // // // import 'slick-carousel/slick/slick-theme.css';
// // // // // import './ParallaxImageSlider.css';

// // // // // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// // // // //   const settings = {
// // // // //     dots: true,
// // // // //     infinite: true,
// // // // //     speed: transitionSpeed || 500,
// // // // //     slidesToShow: 1,
// // // // //     slidesToScroll: 1,
// // // // //   };

// // // // //   return (
// // // // //     <ParallaxProvider>
// // // // //       <Slider {...settings}>
// // // // //         <div className="slider-item">
// // // // //           <Parallax y={[-20, 20]}> {/* Adjust the y prop values for the parallax effect */}
// // // // //             <img src={image} alt="Parallax Slide" />
// // // // //           </Parallax>
// // // // //         </div>
// // // // //       </Slider>
// // // // //     </ParallaxProvider>
// // // // //   );
// // // // // };

// // // // // export default ParallaxImageSlider;

// // // // // components/ParallaxImageSlider.js
// // // // import React from 'react';
// // // // import Slider from 'react-slick';
// // // // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // // // import 'slick-carousel/slick/slick.css';
// // // // import 'slick-carousel/slick/slick-theme.css';
// // // // import './ParallaxImageSlider.css';

// // // // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// // // //   const settings = {
// // // //     dots: true,
// // // //     infinite: true,
// // // //     speed: transitionSpeed || 500,
// // // //     slidesToShow: 1,
// // // //     slidesToScroll: 1,
// // // //   };

// // // //   return (
// // // //     <ParallaxProvider>
// // // //       <Slider {...settings}>
// // // //         <div className="slider-item">
// // // //           <Parallax y={[-20, 20]}>
// // // //             <img src={image} alt="Parallax Slide" />
// // // //             <div className="slide-content">
// // // //               <p>
// // // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
// // // //                 incididunt ut labore et dolore magna aliqua.
// // // //               </p>
// // // //             </div>
// // // //           </Parallax>
// // // //         </div>
// // // //       </Slider>
// // // //     </ParallaxProvider>
// // // //   );
// // // // };

// // // // export default ParallaxImageSlider;
// // // // components/ParallaxImageSlider.js
// // // import React from 'react';
// // // import Slider from 'react-slick';
// // // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // // import 'slick-carousel/slick/slick.css';
// // // import 'slick-carousel/slick/slick-theme.css';
// // // import './ParallaxImageSlider.css';

// // // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// // //   const settings = {
// // //     dots: true,
// // //     infinite: true,
// // //     speed: transitionSpeed || 500,
// // //     slidesToShow: 1,
// // //     slidesToScroll: 1,
// // //   };

// // //   return (
// // //     <ParallaxProvider>
// // //       <Slider {...settings}>
// // //         <div className="slider-item">
// // //           <Parallax y={[-20, 20]}>
// // //             <img src={image} alt="Parallax Slide" />
// // //           </Parallax>
// // //           <Parallax y={[-10, 10]}>
// // //             <div className="slide-content">
// // //               <p>
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
// // //                 incididunt ut labore et dolore magna aliqua.
// // //               </p>
// // //             </div>
// // //           </Parallax>
// // //         </div>
// // //       </Slider>
// // //     </ParallaxProvider>
// // //   );
// // // };

// // // export default ParallaxImageSlider;

// // // components/ParallaxImageSlider.js
// // import React from 'react';
// // import Slider from 'react-slick';
// // import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import './ParallaxImageSlider.css';

// // const ParallaxImageSlider = ({ image, parallaxIntensity, transitionSpeed }) => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: transitionSpeed || 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //   };

// //   return (
// //     <ParallaxProvider>
// //       <Slider {...settings}>
// //         <div className="slider-item">
// //           <Parallax y={[-20, 20]} x={[-20, 20]} z={[-20, 20]}> {/* Adjust the x, y, and z prop values for 3D parallax effect */}
// //             <img src={image} alt="Parallax Slide" />
// //           </Parallax>
// //           <Parallax y={[-10, 10]} x={[-10, 10]} z={[-10, 10]}> {/* Adjust the x, y, and z prop values for 3D parallax effect */}
// //             <div className="slide-content">
// //               <p>
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
// //                 incididunt ut labore et dolore magna aliqua.
// //               </p>
// //             </div>
// //           </Parallax>
// //         </div>
// //       </Slider>
// //     </ParallaxProvider>
// //   );
// // };

// // export default ParallaxImageSlider;
// // components/ParallaxImageSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './ParallaxImageSlider.css';

// const ParallaxImageSlider = ({ image, sideImage, parallaxIntensity, transitionSpeed }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: transitionSpeed || 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <ParallaxProvider>
//       <Slider {...settings}>
//         <div className="slider-item">
//           <Parallax y={[-20, 20]} x={[-20, 20]} z={[-20, 20]}>
//             <img src={image} alt="Parallax Slide" />
//           </Parallax>
//           <Parallax y={[-10, 10]} x={[-10, 10]} z={[-10, 10]}>
//             <div className="slide-content">
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </Parallax>
//         </div>
//         <div className="side-parallax">
//           <Parallax x={[-30, 30]}>
//             <img src={sideImage} alt="Side Parallax" />
//           </Parallax>
//         </div>
//       </Slider>
//     </ParallaxProvider>
//   );
// };

// export default ParallaxImageSlider;
// components/ParallaxImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ParallaxImageSlider.css';


const ParallaxImageSlider = ({ image, sideImage, parallaxIntensity, transitionSpeed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: transitionSpeed || 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ParallaxProvider>
      <Slider {...settings}>
        <div className="slider-item">
          <Parallax y={[-20, 20]} x={[-20, 20]} z={[-20, 20]}>
            <img src={image} alt="Parallax Slide" />
          </Parallax>
          <Parallax y={[-10, 10]} x={[-10, 10]} z={[-10, 10]}>
            <div className="slide-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Parallax>
        </div>
        <div className="side-parallax">
          <Parallax x={[-30, 30]}>
            <img src={sideImage} alt="Side Parallax" />
          </Parallax>
          <Parallax x={[-20, 20]}>
            <div className="developer-profile">
              <h2>Developer Profile</h2>
              <p>
                Hi, I'm [Abhishek], a passionate developer with expertise in [HTML, CSS, JAVASCRIPTE,REACT,NODE.JS]. I
                love creating amazing web experiences and solving complex problems.
              </p>
              {/* Add more details about your developer profile as needed */}
            </div>
          </Parallax>
        </div>
      </Slider>
    </ParallaxProvider>
  );
};

export default ParallaxImageSlider;
