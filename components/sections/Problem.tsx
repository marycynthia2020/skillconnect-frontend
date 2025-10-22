import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Problem = () => {
  const problems = [
    {
      header: "  Hard to find reliable artisans",
      desc: " Many people struggle to locate skilled workers nearby or confirm their credibilty befor hiring them",
    },
    {
      header: " lack of online visibility",
      desc: " Skilled individuals often remain unknown because they have no digital space to showcase what they do",
    },
    {
      header: " No central platform",
      desc: "  There's no simple, trusted place to connect both sides dierctl",
    },
  ];

  return (
    <section className="w-full mt-10 md:mt-20">
      <div className="w-full max-w-[1280px] mx-auto px-5 lg:grid lg:grid-cols-7 md:gap-20 lg:items-center">
        {/* left: Content */}
        <div className="w-full flex flex-col h-auto   bg-white lg:col-span-4">
          <div className="text-sm font-medium tracking-wider mb-6 text-[#f38049] uppercase">
            The problem we're solving
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
            Finding the right artisans shouldn't be this hard
          </h2>
          <div className="flex lg:hidden mb-6">
            <img
              src="/call.png"
              alt="frustrated caller"
              className="w-full md:h-auto object-cover"
            />
          </div>
          {problems.map((p, i) => (
            <div className="mb-6 " key={i}>
              <h2 className="text-xl md:text-2xl font-medium capitalize mb-2 flex gap-2 items-center">
                <IoMdCheckmark className="text-[#f38049]" /> {p.header}
              </h2>
              <p className="text-lg md:text-xl lg:text-balance opacity-70 ">
               {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* rigth: Image */}
        <div className="h-full lg:flex lg:col-span-3 hidden ">
          <img
            src="/call.png"
            alt="frustrated caller"
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
