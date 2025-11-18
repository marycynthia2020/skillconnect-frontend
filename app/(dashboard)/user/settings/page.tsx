import { AccountOptions, Security } from "@/components/dashboard/DashboardSettings";
import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="text-white bg-dark-blue p-6 rounded-md mb-10">
        <h2 className="font-bold text-2xl md:text-3xl 2xl:text-4xl mb-2 ">
          Account Settings
        </h2>
        <p className=" text-gray-300 mb-8">
         Manage your account settings and preferences
        </p>
      </div>

      <AccountOptions />
      <Security />
    </div>
  );
};

export default Settings;
