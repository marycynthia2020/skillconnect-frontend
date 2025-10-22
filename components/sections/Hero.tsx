"use client";
import { useEffect, useState } from "react";

const images = ["/engr.jpg", "/brick-layer.jpg", "/tailor.jpg", "/plumb.png"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden  bg-[url('/plumb.png')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* <div
        className={` flex w-full h-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((img, index) => (
          <div key={index} className=" opacity-80 w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}

      {/* Optional overlay */}
      <div className="px-5 absolute max-w-[1440px] mx-auto  inset-0 flex items-center  text-white">
        <div className="w-full max-w-4xl flex flex-col gap-8 mt-20">
          <h1 className="text-3xl text-balance lg:text-6xl font-bold capitalize  leading-[1.2]  ">
            Welcome to skillConnect where talents meets opportunities
          </h1>
          <h4 className="text-xl  md:text-2xl  text-balance opacity-70 ">
            We give artisans the visibility they deserve and helps clients find
            trusted talents right in their neighborhood.
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="px-10 py-4 border border-transparent font-light w-full md:w-fit text-white bg-[#000c54] uppercase ">
              Find talent
            </button>
            <button className="px-10 py-4 w-full md:w-fit text-white  font-light border border-gray-400 uppercase">
              join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
