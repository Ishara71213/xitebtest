import "./ImageSlider.css";
import { useState, useEffect } from "react";
import { ImageSliderContent } from "./imageSliderContent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ImageSlider = () => {
  const [currImg, setCurrImg] = useState(1);
  const [isHover, setIsHover] = useState(false);
  // const [autoPlay,setAutoPlay]=useState(true);

  const handleMouseEnter = () => setIsHover(!isHover);
  const handleMouseLeave = () => setIsHover(!isHover);
  const handleOnClickRight = () => {
    currImg === ImageSliderContent.length - 1
      ? setCurrImg(0)
      : setCurrImg(currImg + 1);
    // setAutoPlay(false);
  };
  const handleOnClickLeft = () => {
    currImg === 0
      ? setCurrImg(ImageSliderContent.length - 1)
      : setCurrImg(currImg - 1);
    // setAutoPlay(false);
  };

  useEffect(() => {
    setTimeout(() => {
      currImg === ImageSliderContent.length - 1
        ? setCurrImg(0)
        : setCurrImg(currImg + 1);
    }, 5000);
  });

  return (
    <div className="imageSlider-container">
      <div className="bg-image-container">
        <div
          className="bg-image-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`icon-container ${!isHover ? "hidden" : ""}`}>
            <div className="leftClick ico-bg" onClick={handleOnClickLeft}>
              <FaChevronLeft
                color="white"
                width={20}
                style={{ paddingRight: 2 }}
              />
            </div>
            <div className="RightClick ico-bg" onClick={handleOnClickRight}>
              <FaChevronRight
                color="white"
                width={20}
                style={{ paddingLeft: 2 }}
              />
            </div>
          </div>
          <div
            className="banner-container"
            style={{
              backgroundImage: `url(${ImageSliderContent[currImg].imgUrl})`,
            }}
          >
            <div className="banner-graidient">
              <div className="banner-wrapper">
                <div className="slider-title">
                  {ImageSliderContent[currImg].title}
                </div>
                <div className="slider-subtitle">
                  {ImageSliderContent[currImg].subTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
