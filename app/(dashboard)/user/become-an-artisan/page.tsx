import ArtisanRegistrationForm from "@/components/dashboard/ArtisanRegistrationForm";
import { Briefcase, CheckCircle } from "lucide-react";
import React from "react";

const artisanRegistration = () => {
  const benefits = [
    "Get discovered by clients in your area and beyond",
    "Build your professional reputation with reviews",
    "Connect directly with clients through messages",
  ];
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl 2xl:text-4xl mb-2 ">
        Become an Artisan
      </h2>
      <p className=" text-gray-500 mb-10">
        Convert your profile to start offering your skills on SkillConnect
      </p>

      <div className="bg-[#fefcfa] border p-8 rounded-md border-orange-100 shadow-lg mb-10">
        <h2 className=" flex items-center gap-2 font-bold text-xl md:text-2xl mb-6 ">
          <Briefcase className=" size-6 text-dark-blue" />
          <span>Why Become an Artisan on SkillConnect?</span>
        </h2>
        <ul className="flex flex-col gap-4">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="text-dark-blue" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <ArtisanRegistrationForm />
    </div>
  );
};

export default artisanRegistration;
