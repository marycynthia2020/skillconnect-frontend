import React from "react";

const ArtisanRegistrationForm = () => {
  return (
    <form className="border border-gray-300 p-5 rounded-md">
      <h2 className="font-bold text-xl md:text-2xl mb-2 ">Application Form</h2>
      <p className=" text-gray-500 mb-8">
        Fill out the form below to create your artisan profile and get
        discovered
      </p>

      <div className="mb-8">
        <label className="block text-sm font-medium mb-1">Skill</label>
        <input
          type="text"
          required
          className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
          placeholder="What do you do? eg.plumber"
        />
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium  mb-1">
          Professional Description
        </label>
        <textarea
          required
          className="bg-gray-100 h-40 resize-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
          placeholder="Describe what you do and what makes you stand out"
        ></textarea>
      </div>
      <div className="bg-gray-100 rounded-md p-4 mb-8">
        <h2 className="font-bold text-lg mb-2 ">
          Verification Fee
        </h2>
        <p className=" text-gray-500 mb-8">
          A one-time verification fee of ₦0000 is required to activate your artisan profile. This helps us maintain quality and trust on the platform.
        </p>
      </div>
      <button className="w-full md: md:w-fit rounded-md bg-dark-blue cursor-pointer text-lg px-8 py-4  text-white">Submit Application</button>
    </form>
  );
};

export default ArtisanRegistrationForm;
