import React from "react";

const About = () => {
  return (
    <section className="w-full mt-10 md:mt-20" id="about">
      <div className="max-w-[1280px] mx-auto px-5 grid md:grid-cols-7 md:gap-20 items-center">
        {/* Left: Image */}
        <div className="h-full md:flex md:col-span-3 hidden ">
          <img
            src="/plumber1.jpg"
            alt="Professional plumber at work"
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center h-auto md:h-[600px] py-10 bg-white md:col-span-4">
          <div className="text-sm font-medium tracking-wider mb-6 text-[#f38049] uppercase">
            ABOUT US
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
            A platform for connecting skilled people with those who need them
          </h2>
          <h4 className="text-lg md:text-xl md:text-balance opacity-70">
            We give artisans the visibility they deserve and help clients find
            trusted talents right in their neighborhood.
          </h4>

          {/* Best Choosing Section */}
          <div className="pt-8 space-y-2">
            <h2 className="text-xl md:text-2xl font-medium capitalize">
              best choosing
            </h2>
            <h4 className="text-lg md:text-xl md:text-balance opacity-70">
              Verified artisans in your neighborhood who are ready to get your
              work done promptly and efficiently.
            </h4>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <img
                src="/plumber2.jpg"
                alt="Plumber working"
                className="h-60 aspect-square  object-cover"
              />
              <div className="relative overflow-hidden">
                <img
                  src="/plumber2.jpg"
                  alt="Plumber with tools"
                  className="h-60 aspect-square  object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
