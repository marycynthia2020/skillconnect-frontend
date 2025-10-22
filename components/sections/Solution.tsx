import React from "react";
import { FaPhone, FaSearchDollar, FaSearchLocation } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";
import { TbContract } from "react-icons/tb";

const Solution = () => {
  const solutions = [
    {icon: MdOutlineVerified,
      title: "Verified Artisans",
      description:
        "Every artisan on SkillConnect goes through a quick verification step, so clients can hire with confidence knowing they’re working with trusted professionals.",
    },
    {
        icon: IoIosPeople,
      title: "Local Opportunities",
      description:
        "Get connected with people right in your area — no long searches or distant gigs. Find work or skilled help within your local community.",
    },
    {icon: FaPhone,
      title: "Direct Communication",
      description:
        "We keep it simple. No middlemen, no hidden rules — clients can reach out to artisans directly and get things started right away.",
    },
    {icon: FaSearchLocation,
      title: "Visibility That Matters",
      description:
        "Create your profile, showcase your skills, and be easily discovered by people who need your service. Your craft deserves to be seen.",
    },
    {icon: TbContract,
      title: "Fair and Flexible",
      description:
        "No complicated fees or rigid contracts — just a straightforward platform that helps you work, earn, and grow at your own pace.",
    },
    {icon: FaPeopleRoof,
      title: "Community Support",
      description:
        "Join a growing network of artisans, clients, and learners who share tips, advice, and opportunities to help you thrive.",
    },
  ];

  return (
    <section className="w-full mt-10 md:mt-20 bg-gray-100 py-10" id="services">
      <div className="max-w-[1440px] px-5 mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-6 text-[#f38049] ">
            why choose us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Skilled and Reliable Services
          </h2>
        </div>
        <div className="grid-cols-[repeat(auto-fit,_minmax(min(400px,_100%),_1fr))] grid gap-8 items-center">
          {solutions.map((solution, index) => (
            <div className="text-center border-0.5 border-[#bebebe] p-5 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(254,178,115,0.4)]" key={index}>


             <div className="text-[#f38049] mb-6 flex items-center justify-center"><solution.icon className="w-12 h-12 " /></div>

              {/* Title */}
              <h3 className="text-xl mb-4 font-semibold text-grey-800">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-relaxed opacity-50">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
