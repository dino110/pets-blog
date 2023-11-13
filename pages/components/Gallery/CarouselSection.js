import { useState, useEffect } from "react";
import styles from "./CarouselSection.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSection() {
  const images = require.context("../../../public/images/gallery/dogs", true);
  const imageList = images.keys().map((image) => images(image));

  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the current window width indicates a mobile view
  const checkIsMobile = () => {
    const mobileBreakpoint = 700;
    const windowWidth = window.innerWidth;
    // Update the state based on the window width
    setIsMobile(windowWidth < mobileBreakpoint);
  };

  // useEffect to add and remove the resize event listener
  useEffect(() => {
    checkIsMobile();
    const handleResize = () => {
      checkIsMobile();
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.carouselSection}>
      <p className={styles.galleryTitle}>Gallery</p>
      <Carousel
        showThumbs={false}
        centerMode={!isMobile}
        centerSlidePercentage={isMobile ? 100 : 50}
        showStatus={false}
        showIndicators={false}
        selectedItem={0}
        infiniteLoop
        emulateTouch
        renderArrowPrev={(clickHandler) => {
          return (
            <div onClick={clickHandler} className={styles.arrowLeft}>
              <Image
                src="./arrow-left.svg"
                width={60}
                height={43}
                alt="arrow left"
                priority
              />
            </div>
          );
        }}
        renderArrowNext={(clickHandler) => {
          return (
            <div onClick={clickHandler} className={styles.arrowRight}>
              <Image
                src="./arrow-right.svg"
                width={60}
                height={43}
                alt="arrow right"
              />
            </div>
          );
        }}
      >
        {imageList.map((image, index) => (
          <div className={styles.carouselImage} key={image.default}>
            <Image
              src={image.default}
              alt={`image-${index}`}
              style={{ objectFit: "cover" }}
              fill={true}
              sizes="(min-width: 1620px) 730px, (min-width: 760px) 45.24vw, 348px"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
