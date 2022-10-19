import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <Slider {...settings}>
        <div>
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className=""
            src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
