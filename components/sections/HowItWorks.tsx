import { CgProfile } from "react-icons/cg";
import { FiZap } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";

const WorkingProcess = () => {
  const steps = [
    {
      number: "01",
      icon: SiGnuprivacyguard,
      title: "Sign Up",
      description: "Create your account in less than a minute",
      contact: "no complicated process",
    },
    {
      number: "02",
      icon: CgProfile,
      title: "Complete your profile",
      description: "Add your skills to help people find you.",
      contact: "Complete profile, more clients.",
    },
    {
      number: "03",
      icon: MdOutlineRocketLaunch,
      title: "Start Earning",
      description: "Respond to job requests and start earning.",
      contact: "We are rooting for you",
    },
  ];

  return (
    <section className="w-full mt-10 md:mt-20 bg-gray-100 py-20">
      <div className="max-w-[1440px] px-5 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-6 text-[#f38049] ">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Working <span className="">Process</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-12 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(254,178,115,0.4)]">
              {/* Step Card */}
              <div className="text-center">
                {/* Icon with Number */}
                <div className="flex justify-center mb-6">
                  <div className="relative shadow-lg w-30 h-30 flex items-center justify-center border-3 border-[#bebebe]  rounded-lg text-[#f38049]">
                    <step.icon className="w-12 h-12 " />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl mb-4 font-semibold text-grey-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed opacity-50">
                  {step.description}
                  {step.contact && (
                    <span className="block">{step.contact}</span>
                  )}
                </p>
              </div>

              {/* Lightning Connector - Hidden on mobile, shown on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 md:-right-[70px] lg:-right-[130px] items-center">
                  <div className="w-[50px] lg:w-[100px] h-[3px] bg-[#bebebe] "></div>
                  <div className="border border-[#bebebe] rounded-full p-2 mx-0.5">
                    <FiZap className="w-6 h-6 text-[#bebebe]" fill="#bebebe" />
                  </div>
                  <div className="w-[50px] lg:w-[100px] h-[3px]  bg-[#bebebe]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
