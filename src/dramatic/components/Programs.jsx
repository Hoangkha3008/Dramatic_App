
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from "../../data";

import { Link } from "react-router-dom";
const Programs = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        // linkDefault: imgGirl,
      }));
    };
  return (
    <div className="ScrollList_horizontal">
      <div>
        <div className="ScrollList_heading-wrap">
          <h2 className="ScrollList_heading">
            <span>Vở kịch</span>
            <span className="ScrollList_label">Mới</span>
          </h2>
        </div>
      </div>
      <div className="ScrollList_body">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="list">
            <div className="list-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                // onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
              <div className="layer_tiket">
                <Link to="/"><button>Mua vé online</button></Link>
              </div>
            </div>
            <div className="list-center">
              <h3>{item.price}đ</h3>
              <span className="category">{item.category}</span>
            </div>
            <div className="list-bottom">
              <span className="dramatist">{item.dramatist}</span>
              <span className="status">{item.status}</span>
              </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Programs;
